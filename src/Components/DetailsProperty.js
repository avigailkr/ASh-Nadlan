import * as React from 'react';
import { useEffect, useState } from "react";
import { getDetailsOfPropById } from "../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveDetailsProp } from "../store/Actions/PropAction";
import { useParams } from "react-router-dom";
import { SaveArrType, SaveArrStatus } from "../store/Actions/PropAction";
import { getAllTypeFromServer, getStatusFromServer, bringImagesFromServer } from "../Services";
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const DetailsProperty =()=>{
const [imgs,setImgs]=useState([]);
const [det, setDet]=useState({});
    let dis=useDispatch();

    let {idProp}=useParams();
     const id=idProp;
    console.log(id);

    


    useEffect(()=>{
    getDetailsOfPropById(id).then((res)=>{
        dis(SaveDetailsProp(res.data[0]));
        console.log("res.data")
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
    },[])

   

    let arrType=useSelector(x=>x.prop.arrType);

    let arrStatus=useSelector(x=>x.prop.arrStatus);


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
//     console.log(details);

return <>
<h1>פרטי הנכס</h1>
    {/* <label className="label-det">פרטים</label> */}
   
         <div className="divImageGallery">
         <ImageGallery items={imgs} />
         </div>

         <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
    <div>
    <List dir="rtl" sx={{ width: '100%', maxWidth: 360, ml:75, mt:10 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
<PlaceIcon/>
          </Avatar>
        </ListItemAvatar>
        {arrType.map((item)=>{
        return item.Id===det.IdKindProp && <p>סוג הנכס:{item.Name}</p>
    })}
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
          
 <LoyaltyIcon />
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





        <Grid item xs={12} md={6}>
        <div>
         <List dir="rtl" sx={{ width: '100%', maxWidth: 360, ml:90, mt:10 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
 <LoyaltyIcon/>
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
    {/* <div className="det">

     <p>תאריך העלאת נכס:{det.InsertDate}</p>
     <p> קומה:{det.Floor}     מתוך:{det.InFloor}</p> 
     <p>מספר חדרים:{det.RoomNum}</p>
     <p>חצי חדר:{det.HalfRoom}</p>
    {arrStatus.map((item)=>{
        return item.Id===det.IdStatus && <p>מצב הנכס:{item.Status}</p>
    })}

    <p>{det.Description}</p>
    
    <p>{det.IdEnterDate}</p>
    
    </div> */}

</>

}
export default DetailsProperty