import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { getAllCityisFromServer } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveArrCity } from "../../store/Actions/PropAction";
import { useEffect } from "react";

const StepOne = ({ nextStep }) => {
  //useState for a form 
  const [flag, setFlag] =useState(true);
  const [flag1, setFlag1]=useState(true);
  const [show, setShow]=useState(true);
  const [adress, setAdress]=useState("ישראל");
  const [adress2,setAdress2]=useState("ישראל");
  const [city, setCity]=useState(1)

let dis=useDispatch();

  useEffect(()=>{
    getAllCityisFromServer().then(res=>{
        dis(SaveArrCity(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))
},[])

// let arrCity=useSelector(x=>x.prop.arrCity);


  //function submit 
  const handleNext = (e) => {
    e.preventDefault();
   let isSale="";
    if(flag)
    isSale=2;
    else
    isSale=1;

    nextStep({isSale, adress, city});
  };

  //function on click button color change 
  const handleClick = () => {
    if(flag1===false)
    {
     setFlag(!flag)
     setFlag1(!flag1)
    }
     else
      setFlag(!flag);
    
  };
  const handleClick1 = () => {
    if(flag===false)
    {
      setFlag1(!flag1) 
      setFlag(!flag)
    }
    else
    setFlag1(!flag1);
  };
  
  //function to search --> substring from string the "," tav and put "+" insted
// const search=(e)=>{
//   setAdress2(adress)
//   console.log(e)

// }
    
  const showing=()=>{
    setShow(!show)
  }
  
  return (<div className="addProp-main">
   
   

    <form onSubmit={handleNext} className="form__step">
      <Steps level={0}/> 
      <label id="isSale">
        ?מוכרים או משכירים
        </label>
         <Stack direction="row" spacing={2} >
          
      <Button  onClick={handleClick} value={flag} variant={flag ? "outlined": "contained"}>משכירים</Button>
      <Button onClick={handleClick1} value={flag1} variant={flag1 ? "outlined": "contained"} >מוכרים</Button>
     </Stack>
      
      <br/>
      <label id="adress">
     :כתובת הנכס
      </label>

      {/* <div className="div-adress">
        <div>
         <p>עיר</p>
         
         <Select value={Option.value}  size='md' sx={{mb:2, minWidth:95, ml:4 }} onChange={(e)=>{setCity(e.target.id)}}>
          {arrCity.map((item, index)=>{return <> 
          <Option id={item.Id} value={item.Name} >{item.Name}</Option>
          </>})}
        </Select>
</div>
<div>
   <p>רחוב</p>
      <TextField id="outlined-basic"
       label="לדוגמא: זבוטינסקי 20"
       multiline
       dir="rtl"
       maxRows={2}
       size="small"
       variant="outlined" 
       Width={90}
       onChange={(e)=>{setAdress(e.target.value)}}
       />
       </div>
</div> */}
       {/* <p id="l-map" onClick={showing} >:כתובת במפה</p> */}

    <Paper
      // component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="הזן כתובת מלאה של הנכס"
        dir="rtl"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>{setAdress(e.target.value)}}
      />
      <IconButton onClick={()=>{setAdress2(adress)}} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon onClick={handleMarkerClick}/>
      </IconButton> */}
    </Paper>    

        <iframe title="map" width="600" height="450" id="gmap_canvas" 
         
         src={`https://maps.google.com/maps?q=${adress2}&t=&z=15&ie=UTF8&iwloc=&output=embed`} >
        </iframe>

      <br/>
      <div className="div-but">
      <button type="submit" className="form__button">הבא</button>
      </div>
    </form>
    </div>
  );
};
export default StepOne;