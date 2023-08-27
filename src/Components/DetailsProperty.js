import { useEffect, useState } from "react";
import { getDetailsOfPropById } from "../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveDetailsProp } from "../store/Actions/PropAction";
import { useParams } from "react-router-dom";
import { SaveArrType, SaveArrStatus } from "../store/Actions/PropAction";
import { getAllTypeFromServer, getStatusFromServer } from "../Services";

const DetailsProperty =()=>{

    let dis=useDispatch();

    let {idProp}=useParams();
     const id=idProp;
    console.log(id);
    useEffect(()=>{
    getDetailsOfPropById(id).then((res)=>{
        dis(SaveDetailsProp(res.data[0]));
        console.log("res.data")
        console.log(res.data[0]);
    }).catch(err=>console.log(err))

    getAllTypeFromServer().then(res=>{
        dis(SaveArrType(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))

    getStatusFromServer().then(res=>{
        dis(SaveArrStatus(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))

    },[])

    let details=useSelector(x=>x.prop.details);
    console.log(details);

    let arrType=useSelector(x=>x.prop.arrType);

    let arrStatus=useSelector(x=>x.prop.arrStatus);

return <>
<h1>פרטי הנכס</h1>
    {/* <label className="label-det">פרטים</label> */}
    <div></div>
    <p>כתובת: {details.Adress}</p>
    <p>מחיר:  {details.Price}</p>
    <p>שטח במ"ר:{details.Sqm}</p>
    
    {details.IdTypeSale===1? <p>נכס למכירה</p>:<p>נכס להשכרה</p>}
    
    {arrType.map((item)=>{
        return item.Id===details.IdKindProp && <p>סוג הנכס:{item.Name}</p>
    })}
    
     <p>תאריך העלאת נכס:{details.InsertDate}</p>
     <p> קומה:{details.Floor}     מתוך:{details.InFloor}</p> 
     <p>מספר חדרים:{details.RoomNum}</p>
     <p>חצי חדר:{details.HalfRoom}</p>
    {arrStatus.map((item)=>{
        return item.Id===details.IdStatus && <p>מצב הנכס:{item.Status}</p>
    })}

    <p>{details.Description}</p>
    
    <p>{details.IdEnterDate}</p>
      {/* <p>{details.ImgUrl}</p> */}


</>

}
export default DetailsProperty