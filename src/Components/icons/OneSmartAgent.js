import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { GetNameCityByIdSmartAgent, GetTypePropByIdSmartAgent, GetTypeSaleByIdSmartAgent } from '../../Services';
import { useState } from 'react';


const OneSmartAgent=(props)=>{
let [city,setcity]=useState(null)
let [typesale,settypesale]=useState(null)
let [typeprop,settypeprop]=useState(null)
useEffect(()=>{
    props.props.City && GetNameCityByIdSmartAgent(props.props.City).then(res=>{
        setcity(res.data[0].Name)
    }).catch(err=>alert(err))

    props.props.TypeSale && GetTypeSaleByIdSmartAgent(props.props.TypeSale).then(res=>{
        settypesale(res.data[0].type)
    }).catch(err=>alert(err))

    props.props.TypeProp && GetTypePropByIdSmartAgent(props.props.TypeProp).then(res=>{
        settypeprop(res.data[0].Name)
    }).catch(err=>alert(err))

},[])
return<>
<ListItemText 
       primary={city}
        secondary={ <>
                    בשנים: {props.props.FromYear+"-"+props.props.UntilYear} <br/>
                    מחיר: {props.props.FromPrice+"-"+props.props.UntilPrice}<br/>
                     מ"ר: {props.props.FromSize+"-"+props.props.UntilSize}<br/>
                     חדרים: {props.props.Room}<br/>
                     סוג הנכס:{typeprop}<br/>
                     סוג מכירה: {typesale}
                    </>} />
                    

                    </>
}

export default OneSmartAgent;