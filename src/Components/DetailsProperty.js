import * as React from 'react';
import { useEffect, useState } from "react";
import { getDetailsOfPropById } from "../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveDetailsProp } from "../store/Actions/PropAction";
import { useParams } from "react-router-dom";
import { SaveArrType, SaveArrStatus } from "../store/Actions/PropAction";
import { getAllTypeFromServer, getStatusFromServer, bringImagesFromServer , getOwnerFromServer} from "../Services";
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


const DetailsProperty =()=>{
const [imgs,setImgs]=useState([]);
const [det, setDet]=useState({HalfRoom:{type: 'Buffer', data: Array([0])}})
let [owner, setOwner] = useState(null);

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

      if(imgs.length==0){
        setImage(res.data)
      } 
   }).catch(err=>alert(err))

   getOwnerFromServer(idPropOwner).then(res => {
    setOwner(res.data[0])
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
        original:`http://localhost:8080/images/${res[i].Name}`, thumbnailHeight:80,
        thumbnail:`http://localhost:8080/images/${res[i].Name}`,sizes:100,
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

return <>
<h1>פרטי הנכס</h1>
    {/* <label className="label-det">פרטים</label> */}
   <p className='pDate'>הועלה בתאריך: {moment(det.InsertDate).utc().format('DD/MM/YYYY')}</p>
   
   
<div className='firstrow'>
<div className="mapDet">
  <h3>מיקום הנכס על המפה</h3>
         <iframe title="map" width="350" height="600"  
         
         src={`https://maps.google.com/maps?q=${det.Adress}&t=&z=15&ie=UTF8&iwloc=&output=embed`} >
        </iframe>
</div>

         <div className="divImageGallery">
         <ImageGallery items={imgs} />

         </div>
         <div>

         </div>
       
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
</div>
}

{<h4>פרטים נוספים- </h4>
   //שליפה מ2 הטבלאות והצגתן ניראלי בג'ויין
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