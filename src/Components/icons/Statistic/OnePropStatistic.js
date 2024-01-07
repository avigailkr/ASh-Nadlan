import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetNameCityByIdStatistic, GetTypePropByIdStatistic, GetTypeSaleByIdStatistic } from '../../../Services';



const OnePropStatistic=(props)=>{
    let [city,setcity]=useState(null)
    let [typesale,settypesale]=useState(null)
    let [typeprop,settypeprop]=useState(null)
    useEffect(()=>{
        props.props.IdCity && GetNameCityByIdStatistic(props.props.IdCity).then(res=>{
            setcity(res.data[0].Name)
        }).catch(err=>alert(err))
    
        props.props.IdTypeSale && GetTypeSaleByIdStatistic(props.props.IdTypeSale).then(res=>{
            if(res.data[0].type=="מכירה")
            settypesale("נמכר")
            else settypesale("מושכר")
        }).catch(err=>alert(err))
    
        props.props.IdKindProp && GetTypePropByIdStatistic(props.props.IdKindProp).then(res=>{
            settypeprop(res.data[0].Name)
        }).catch(err=>alert(err))
    
    },[])
console.log("props")
console.log(props.props)
return<>
             {/* <td align="right">{new Date(job.DateAdded).toLocaleDateString()}</td> */}
            
            <td align="left">{props.props.Price}₪</td>
            <td align="left">{typeprop}</td>
            <td align="left">{typesale}</td>
            <td align="left">{props.props.Adress}</td>
            <td align="left">{city}</td>
            <td align="left">{new Date(props.props.LastDateSaleOrRent).toLocaleDateString()}</td>


                    </>
}

export default OnePropStatistic;