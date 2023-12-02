import * as React from 'react';
import { useEffect, useState } from "react";
import { getDetailsOfPropById } from "../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveDetailsProp } from "../store/Actions/PropAction";
import { useParams } from "react-router-dom";
import { SaveArrType, SaveArrStatus } from "../store/Actions/PropAction";
import { getAllTypeFromServer, getStatusFromServer, bringImagesFromServer , getOwnerFromServer, getAddDetails} from "../Services";
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { format, compareAsc } from 'date-fns';
import moment from 'moment/moment';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from "react-router-dom"; //אפשרות ניתוב לפי הניתובים שהגדרת
import { red, grey} from "@mui/material/colors";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import   {Checkbox , checkboxClasses } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const DetailsProperty = () => {
const [imgs,setImgs] = useState([]);
const [upImgs, setUpImgs]= useState([]);
const [det, setDet] = useState({HalfRoom:{type: 'Buffer', data: Array([0])}})
let [owner, setOwner] = useState(null);
const [details, setDetails] = useState([]);
const [selectedImages, setSelectedImages] = useState([]);
const [idImg1, setIdImg1]= useState([]);
const [idImg2, setIdImg2]= useState([]);

//verible for update
const [type, setType] = useState(1);
const [floor, setFloor] = useState("1");
const [inFloor, setInFloor] = useState("1");
const [room, setRoom] = useState("1");
const [halfRoom, setHalfRoom] = useState(true);
const [sito, setSito] = useState(1);
const [date, setDate] = useState(1);
const [adress, setAdress]=useState("ישראל");
const [adress2,setAdress2]=useState("ישראל");
const [price, setPrice] = useState(0);
const [mr, setmr] = useState("");

let stringDet=""; 
let userSelect = useSelector(state => state.user.selectedUser);

// let idPropOwner = props.props.IdUser;

const nav = useNavigate();

let isBilding=false;
    let dis=useDispatch();

    let {idProp}=useParams();
     const id=idProp;
    console.log(id);

   let {idPropOwner}=useParams();
   console.log(idPropOwner);

   const {update}=useParams();
   console.log("uuuuuuupdateeeeeeeee")
   console.log(update)

    useEffect(()=>{
    getDetailsOfPropById(id).then((res)=>{
        dis(SaveDetailsProp(res.data[0]));
        console.log("res.data")
        console.log(res.data[0])
        setDet(res.data[0]);
    }).catch(err=>console.log(err))

    getAllTypeFromServer().then(res=>{
        dis(SaveArrType(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))

    getStatusFromServer().then(res=>{
        dis(SaveArrStatus(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))


    bringImagesFromServer(idProp).then((res)=>{
      console.log(res.data);
      console.log(imgs);

      if(imgs.length===0){
        if(update==="true")
        setImage2(res.data)
        else
        setImage(res.data)
      } 
   }).catch(err=>alert(err))

   getOwnerFromServer(idPropOwner).then(res => {
    setOwner(res.data[0])
  }).catch(err => alert(err))


  getAddDetails(idProp).then(res => {
   console.log("addddetails")
   setDetails(res.data);
  }).catch(err => alert(err))

 

    },[])

    let arrType=useSelector(x=>x.prop.arrType);

    let arrStatus=useSelector(x=>x.prop.arrStatus);
    
const checkDesc = ()=>{
  if(det.Description === null || det.Description == " ")
  return false;
  else
  return true;
}

const setImage = (res)=>{
  console.log(res)
  for(let i=0 ; i<res.length; i++){
    imgs.push(
      {
        original:`http://localhost:8080/images/${res[i].Name}`, thumbnailHeight:80,id:i+1,
        thumbnail:`http://localhost:8080/images/${res[i].Name}`,sizes:100,id:i+1,
      }
    )
  }
  console.log(imgs)
}

//lop for update equal true
const setImage2=(res)=>{

for(let i=0 ; i<res.length; i++){
  
  imgs.push(
   {
     img: `http://localhost:8080/images/${res[i].Name}`,
   }
  )
}
console.log(imgs)
 }
   
// const details=useSelector(x=>x.prop.details);
  console.log(det.HalfRoom);

  const func1=()=>{
    if(det.IdEnterDate==1)
    return "מיידי";
    else if(det.IdEnterDate==2)
    return "גמיש";
    else if(det.IdEnterDate==3)
    return "עתידי";

  }

  const fun = () => {
    console.log("chatttttttttttttttttt");

    if (userSelect != null)
      nav(`/chat/${idPropOwner}`);
  };
  const answer = () => {
    console.log("chatttttttttttttttttt");

    if (userSelect != null)
      nav(`/answer`);
  };
 
  let nameSlice = ' ';
  
  if (owner != null) {
    nameSlice = `${owner.Mail.slice(0, 1)}`;
  }

  const handleImageClick = (image) => {
    // Toggle the checkbox state
    const newSelectedImages = [...selectedImages];
    if (newSelectedImages.includes(image.id)) {
      newSelectedImages.splice(newSelectedImages.indexOf(image.id), 1);
    } else {
      newSelectedImages.push(image.id);
    }
    setSelectedImages(newSelectedImages);
  };
  const handleDeleteImage=(item)=>{
console.log("delete function")
  }


  const onFileChange = (files) => {
    setUpImgs(f => [...f, ...files]);
  };

  const handleClick = (e) => {
    // const img = e.target;
    // const checkbox = img.querySelector(".checbox");
    // checkbox.checked = !checkbox.checked;
  };

  const hendelClickDelete1 = (id, checked) =>{
    console.log(checked)
    console.log(id);
    console.log(idImg1)
    if(checked==true)
    idImg1.push(id);
    else
    {
      let index=idImg1.indexOf(id);
      idImg1.splice(index, 1);
    }
    console.log(idImg1)

    
  }

  const hendelClickDelete2 = (id, checked) =>{
    if(checked==true)
    idImg2.push(id);
    else
    {
      let index=idImg2.indexOf(id);
      idImg2.splice(index, 1);
    }
    console.log(idImg2)
  }
  const hendelDelete = () =>{
 
    console.log(idImg1)
    console.log(idImg2)

    for (let i = 0; i < idImg1.length; i++) {
      // const index = imgs.findIndex((img) => img.id === idImg1[i]);
      const index=idImg1[i];
      console.log(index);
      // if (index >= 0) {
        imgs.splice(index, 1);
        setImgs(imgs);
      // }
    }
    
    console.log(imgs);

    // if(idImg2.length!=0)
    // for(let i=0; i<idImg1.length; i++){
    //   upImgs.splice(parseInt(idImg2[i]), 1)
    // }
    // console.log(idImg2)


  }

  const setId =(v)=>{
    let d=["מיידי","גמיש","עתידי"];
    d.map((i,index)=>{
      if(i==v){ 
         setDate(index+1);
      }
     
    })
  }

return <>
<h1>פרטי הנכס</h1>
   <p className='pDate'>הועלה בתאריך: {moment(det.InsertDate).utc().format('DD/MM/YYYY')}</p>
   
   
<div className='firstrow'>
<div className="mapDet">

 {update==="true"?
  ""
  :<>
  <h3>מיקום הנכס על המפה</h3>
         <iframe title="map" width="350" height="600"  
         
         src={`https://maps.google.com/maps?q=${det.Adress}&t=&z=15&ie=UTF8&iwloc=&output=embed`} >
        </iframe>
        </>
  }
</div>
{update==="true"?

<div id="DivfileInput2" >

 {imgs.length!=0 ?
 <div id="div-upImgs">
  
 {
 imgs.map((img, index)=>{return <div className="div-upImg" onClick={handleClick}>
   <Checkbox sx={{position:"absolute"}} className='checbox' id={index} onClick={(e)=>hendelClickDelete1(e.target.id, e.target.checked)}/>
  <img src={img.img} width={150} height={135} alt={img.name} id={index}/>
  </div>
 })
}

{upImgs.length!=0 &&
 upImgs.map((img, index)=>{return <div className="div-upImg" onClick={handleClick}>
  <Checkbox  sx={{position:"absolute"}} className='checbox' id={index} onClick={(e)=>hendelClickDelete2(e.target.id, e.target.checked)}/>
 <img src={URL.createObjectURL(img)} width={150} height={135} alt={img.name} id={index}/>
 </div>
 })
}
  

</div>
 :
 <>
 <p>לא הועלו תמונות לנכס</p>
 </>
 }

 <input type="file" accept="image/*" className="input-file" multiple={true} hidden 
onChange={(e)=>{onFileChange(e.target.files)}}/>
 <IconButton color="primary" onClick={()=>document.querySelector('.input-file').click()}>
    <CloudUploadIcon />
 </IconButton>

 <Button variant="contained" sx={{mr:62, mt:41, position:"absolute"}} onClick={hendelDelete}>מחק</Button>


</div>
:<>
       <div className="divImageGallery">
       <ImageGallery items={imgs} />
       </div>
       <div>
       </div>
</>
 }
</div>


 {/* details of property */}
<div className='owner-div'>

{owner &&
  <Tooltip title={owner.Name} TransitionComponent={Zoom} placement="left-end">
            <Avatar sx={{ bgcolor: red[500], ml:139, mt:5 }} aria-label="recipe">
              {nameSlice}
           </Avatar>
  </Tooltip>
}

   {/* {owner && <p className='nameOwner'>{owner.Name}</p>} */}
   {<p className='textChat'>:התכתבות עם בעל הנכס</p>}
   
      {userSelect && userSelect.Id != idPropOwner && <input type="button" className="but-chat2" onClick={fun} value="chat" />}
      {userSelect && userSelect.Id == idPropOwner && <input type="button" className="but-chat2" onClick={answer} value="answer" />}
</div>

{checkDesc()==true && 
<div className='desc'>
  <h3 >:תיאור</h3>
  <p>{det.Description}</p>


{stringDet===""?<>
<h4>:פרטים נוספים </h4>
{details.map((item, index)=>{
  stringDet+=item.Name+" • "
})}
<p>{stringDet} </p>
</>
:
""
}
</div>

}

         <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
    <div>
    <List dir="rtl" sx={{ width: '100%', maxWidth: 360, ml:85}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
<MapsHomeWorkIcon/>
          </Avatar>
        </ListItemAvatar>
        {arrType.map((item)=>{
          item.Name=="בניין"?isBilding=true:isBilding=false;
           return item.Id===det.IdKindProp &&
          
          
           <ListItemText sx={{textAlign:"right", display:'inline'}} primary="סוג הנכס:"
           
              secondary={
                update==="true"?
               <> <Select value={Option.value} defaultValue={item.Name} size='md' sx={{mb:2, minWidth: 125 }} onChange={(e)=> setType(e.target.id)}>
                {arrType.map((item)=>{
                  return <Option id={item.Id} key={item.Id} value={item.Name} >{item.Name}</Option>
                })}
              </Select>
              {type==3 && 
                <div className='levelIn'>
                 <label id='leabelLevelIn11'>
                 קומה
                 </label>
                 
                 <Select defaultValue="1" size='md' sx={{mt:1, mr:4, minWidth: 90 }} onChange={(e)=>setFloor(e.target.innerText)}>
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
            
            
                   <label id='leabelLevelIn22'>
                    מתוך
                   </label>
                   <Select defaultValue="1" size='md' sx={{mt:1,mr:4, minWidth: 90 }} onChange={(e)=>setInFloor(e.target.innerText)}>
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
           }</>
                
                :
             <React.Fragment>           
              <Typography
               textAlign="right"
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
              >
              {item.Name}
              </Typography>
              
              {isBilding===true &&`- קומה ${det.Floor}  מתוך ${det.InFloor} קומות`}
            
            </React.Fragment>
          
          }
          />
           
       })}
        
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
<DashboardCustomizeIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="מספר חדרים: "
        secondary={
          update==="true"?
          <>
          <Select defaultValue="1" size='md' sx={{mt:1,mb:2, minWidth:90 }} onChange={(e)=>setRoom(e.target.innerText)}>     
              <Option value="1">1</Option>      
              <Option value="2">2</Option>              
              <Option value="3">3</Option>              
              <Option value="4">4</Option>              
              <Option value="5">5</Option>              
              <Option value="6">6</Option>              
              <Option value="7">7</Option>              
              <Option value="8">8</Option>              
              <Option value="9">9</Option>              
              <Option value="10+">10+</Option>              
        
          </Select>
          <Typography 
          textAlign="right"
          sx={{ display: 'inline' }}
          component="span"
          variant="body2">
            פלוס 1/2 חדר
            </Typography>
        
        <Checkbox sx={{position:"absolute", mr:1, mt:-1.5}} onChange={(e) => setHalfRoom(!halfRoom)}/>
          </>
          :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {det.HalfRoom['data'][0]==1?`${det.RoomNum} + חצי חדר`:det.RoomNum}
            </Typography>
            
          </React.Fragment>
        }
        />
         </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
   <HelpOutlineIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="מצב הנכס:"
        secondary={
          update==="true"?
          <Select defaultValue="שמור" size='md' sx={{mt:1,mb:2, minWidth: 120 }} onChange={(e)=>setSito(e.target.innerText)}> 
           
             <Option value="חדש מהקבלן">חדש מהקבלן</Option>              
             <Option value="חדש">חדש</Option>              
             <Option value="משופץ">משופץ</Option>              
             <Option value="שמור">שמור</Option>
             <Option value="ישן">ישן</Option>

          </Select>
          :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {arrStatus.map((item)=>{
        return item.Id===det.IdStatus && item.Status
    })}
            </Typography>
            
          </React.Fragment>
        }
        />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
   <CalendarMonthIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="מועד כניסה:"
        secondary={ 
          update==="true"?
          <Select defaultValue="מיידי" size='md' sx={{mt:1,mb:2, minWidth: 120 }} onChange={(e)=>setId(e.target.innerHTML)}>           
             <Option value="מיידי" id="1">מיידי</Option>              
             <Option value="גמיש"  id="2">גמיש</Option>              
             <Option value="עתידי" id="3">עתידי</Option>              
          </Select>
          :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
           {det.IdEnterDate===1?"מיידי":det.IdEnterDate===2?"גמיש":det.IdEnterDate===3?"עתידי":""}
            </Typography>
             
            </React.Fragment>
        }
        />
      </ListItem>

    </List>
    </div>
    </Grid>





        <Grid item xs={12} md={6}>
        <div>
         <List dir="rtl" sx={{ width: '100%', maxWidth: 360, ml:96}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
 <PlaceIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="כתובת:"
        secondary={
          update==="true"?
          <>
          <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}>
          <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="הזן כתובת מלאה"
          dir="rtl"
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e)=>{setAdress(e.target.value)}}
        />
        <LocationOnIcon/>       
       </Paper>    
  
          </>
          :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {det.Adress}
            </Typography>
            
          </React.Fragment>
        }
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
<LocalOfferIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="מחיר:"
        secondary={
          update==="true"?
          <>
          {/* <input type="number" min="0" max="100000000" step="1" required="required" id="priceInput2" 
          pattern="[0-9]{3},[0-9]{3},[0-9]{3}" placeholder='₪' onChange={(e) => setPrice(e.target.value)}/>
           */}
           <FormControl dir="ltr" fullWidth sx={{ m: 1 , width:120}}>
          <OutlinedInput
          sx={{height:40}}
            startAdornment={<InputAdornment position="start">₪</InputAdornment>}
          />
        </FormControl>

        <Typography 
          textAlign="right"
          sx={{ display: 'inline' }}
          component="span"
          variant="body2">
            להציג מחיר
            </Typography>
        
        <Checkbox sx={{position:"absolute", mr:1, mt:-1.5}} onChange={(e) => setHalfRoom(!halfRoom)}/>
          </>
          :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {det.Price}  ₪
            </Typography>
            
          </React.Fragment>
        }
        />
         </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
   M
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary='שטח במ"ר:'
        secondary={
          update==="true"?

          <TextField
         onChange={(e)=>setmr(e.target.value)}
         dir="ltr"
        sx={{ mt: 2, width: '15ch' }}z
       InputProps={{
            startAdornment: 'מ"ר',
        }}
        > 
        </TextField>
        :
          <React.Fragment>
            <Typography
              textAlign="right"
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {det.Sqm}
            </Typography>
            
          </React.Fragment>
          
        }
        />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
 <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        {det.IdTypeSale===1?
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="למכירה"/>
        :
        <ListItemText sx={{textAlign:"right", display:'inline'}} primary="להשכרה"/>
        }
        
      </ListItem>
    </List>
    </div>
    </Grid>

      </Grid>
    </Box>
   

</>

}
export default DetailsProperty