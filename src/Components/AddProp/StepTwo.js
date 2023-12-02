import * as React from 'react';
import {useForm} from 'react-hook-form'
import { useState } from "react";
import "../style.css";
import Steps from "./Steps";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { getAllTypeFromServer } from '../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { SaveArrType } from '../../store/Actions/PropAction';
import { useEffect } from 'react';

const StepTwo = ({ prevStep, nextStep, values }) => {
    const [type, setType] = useState(1);
    const [mr, setmr] = useState("");
    const [room, setRoom] = useState("1");
    const [halfRoom, setHalfRoom] = useState(true);
    const [floor, setFloor] = useState("1");
    const [inFloor, setInFloor] = useState("1");
    const [date, setDate] = useState(1);
    const [price, setPrice] = useState(0);
    const [showPrice, setShowPrice] = useState(true);
  
   let{register,handleSubmit, formState:{isValid, errors}}=useForm({mode:"all"});

    let dis=useDispatch();

    useEffect(()=>{
      getAllTypeFromServer().then(res=>{
          dis(SaveArrType(res.data))
          console.log(res.data)
      }).catch(er=>alert("error in bring arr property from server"))
  },[])
  
  let arrType=useSelector(x=>x.prop.arrType);


  const setId =(v)=>{
    let d=["מיידי","גמיש","עתידי"];
    d.map((i,index)=>{
      if(i==v){ 
         setDate(index+1);
      }
     
    })
  }
    const handlePrev = (e) => {
      e.preventDefault();
      prevStep();
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      nextStep({ ...values, type, mr, room, halfRoom, floor, inFloor, date,  price, showPrice});
      
    };
    
    console.log("type  "+type, "mr  "+mr, "room  "+room, "halfroom  "+halfRoom, "floor  "+floor, "inFloor  "+inFloor, "date  "+date,  "price  "+price)
    


    return <div className="addProp-main">
     
      
      <form className="form__step" onSubmit={handleNext}>
        <Steps level={1}/>
      {/* <div> */}
          <label dir="rtl">
            סוג הנכס:
          </label>
         
         <Select value={Option.value} defaultValue="דירה" size='md' sx={{mb:2, minWidth: 120 }} onChange={(e)=> setType(e.target.id)}>
          {arrType.map((item)=>{
            return <Option id={item.Id} key={item.Id} value={item.Name} >{item.Name}</Option>
          })}
        </Select>
       
        {type==3 && 
       <div className='levelIn'>
        <label id='leabelLevelIn1'>
        קומה
        </label>
        
        <Select defaultValue="1" size='md' sx={{ m: 3, minWidth: 120 }} onChange={(e)=>setFloor(e.target.innerText)}>
           <Option value="1">1</Option>
           <Option value="2">2</Option>
           <Option value="3">3</Option>
           <Option value="4">4</Option>
           <Option value="5">5</Option>
           <Option value="6">6</Option>
           <Option value="7">7</Option>
           <Option value="8">8</Option>
           <Option value="9">9</Option>
           <Option value="10">10</Option>
           <Option value="11">11</Option>
           <Option value="12">12</Option>
           <Option value="13">13</Option>
           <Option value="14">14</Option>
           <Option value="15">15</Option>
           <Option value="16">16</Option>
           <Option value="17">17</Option>
           <Option value="18">18</Option>
           <Option value="19">19</Option>
           <Option value="20+">20+</Option>

        </Select>
   
   
          <label id='leabelLevelIn2'>
           מתוך
          </label>
          <Select defaultValue="1" size='md' sx={{ m: 3, minWidth: 120 }} onChange={(e)=>setInFloor(e.target.innerText)}>
          <Option value="1">1</Option>
           <Option value="2">2</Option>
           <Option value="3">3</Option>
           <Option value="4">4</Option>
           <Option value="5">5</Option>
           <Option value="6">6</Option>
           <Option value="7">7</Option>
           <Option value="8">8</Option>
           <Option value="9">9</Option>
           <Option value="10">10</Option>
           <Option value="11">11</Option>
           <Option value="12">12</Option>
           <Option value="13">13</Option>
           <Option value="14">14</Option>
           <Option value="15">15</Option>
           <Option value="16">16</Option>
           <Option value="17">17</Option>
           <Option value="18">18</Option>
           <Option value="19">19</Option>
           <Option value="20+">20+</Option>
           </Select>
           </div>
  }
       
         <label>
        שטח במ"ר:
         </label>
         
         <TextField
         onChange={(e)=>setmr(e.target.value)}
         dir="ltr"
        sx={{ mb: 2, width: '15ch' }}
       InputProps={{
            startAdornment: 'מ"ר',
        }}
        > 
        </TextField>
       

         
       
            <label>
            מספר חדרים:
            </label>
            <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="1"
        onChange={(e)=>setRoom(e.target.value)}
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {['1', '2', '3', '4', '5','6','7','8','9','10+'].map((size) => (
          <Sheet
            key={size}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color="neutral" overlay disableIcon value={size} label={size} />
          </Sheet>
        ))}
      </RadioGroup>    
          {/* <input id="file"
            type="file"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          /> */}

 
         <label> 
          :תאריך כניסה
         </label>
  <RadioGroup
    row="true"
    aria-labelledby="demo-radio-buttons-group-label"
    orientation="horizontal"
    dir="rtl"
    name="radio-buttons-group"
    sx={{mb:1,mt:2}}
    onChange={(e)=>setId(e.target.value)}
  >
    <FormControlLabel sx={{m:2}} value="מיידי" id="1" control={<Radio />} label="מיידי"  />
    <FormControlLabel sx={{m:2}} value="גמיש" id="2" control={<Radio />} label="גמיש" />
    <FormControlLabel sx={{m:2}} value="עתידי" id="3" control={<Radio />} label="עתידי" />
  </RadioGroup>
       
          <label>
            :מחיר
          </label>
      
        <input type="number" min="0" max="100000000" step="1" required="required" id="priceInput"
         pattern="[0-9]{3},[0-9]{3},[0-9]{3}" placeholder='₪' onChange={(e) => setPrice(e.target.value)}/>
 <div className='div-adress'>
 <div id="d-p">
          <label>
            להציג מחיר
          </label>
        
        <Checkbox  onChange={(e) => setShowPrice(!showPrice)}/>
</div>
<div>
          <label>
            פלוס 1/2 חדר
          </label>
        
        <Checkbox onChange={(e) => setHalfRoom(!halfRoom)}/>
</div>
</div>
       <div className="div-but">
        <button type="submit" className="form__button">הבא</button>
        <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
        </div>
        {/* </div> */}
      </form>
      </div>

  };
  export default StepTwo;