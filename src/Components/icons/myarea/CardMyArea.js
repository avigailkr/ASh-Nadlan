import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red,grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom"; //אפשרות ניתוב לפי הניתובים שהגדרת
import "../../style.css";
import Link from '@mui/material/Link';
//---------- שם נקודה בין שתי מילים- נקודה אמצעית-----------------------
import Box from "@mui/material/Box";
//-----------------------------פח------------------------
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//-------------------- חצים
//back
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
//next
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { hover } from "@testing-library/user-event/dist/hover";
import { useDispatch, useSelector } from "react-redux";
import {getTypeByIdFromServer, getCityByIdFromServer, ActivePropFromServer, bringImagesFromServer, DeletePropFromServer, NotActivePropFromServer, getAllImgsByIdFromServer, getMyLikeFromServer, getOwnerFromServer } from "../../../Services";
import { useState } from "react";
import { useEffect } from "react";

//delete
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';

import Switch from '@mui/joy/Switch';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { AddProp, DeleteProp } from "../../../store/Actions/PropAction";
import IosShareIcon from '@mui/icons-material/IosShare';
import MenuCard from "../MenuCard";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DeleteIcon from '@mui/icons-material/Delete';
//icon update
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { SaveUser } from "../../../store/Actions/UserAction";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ImageIcon from '@mui/icons-material/Image';

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
  
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export default function CardMyArea(props) {
    let dis = useDispatch();
    let userSelect = useSelector(state => state.user.selectedUser);
    let idProp = props.props.Id;
    let idCity= props.props.IdCity;
    let idType= props.props.IdKindProp;
    let idPropOwner = props.props.IdUser;
    let [owner, setOwner] = useState(null);
    let [isLoved, setIsLoved] = useState(0);
    let [arrImg, setarrImg] = useState([]);
    let [index, setindex] = useState(0);
    // let [isDelete, setIsDelete] = useState(false);
  let useselect=useSelector(x=>x.user.selectedUser)
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    let [cityname,setCityName]=useState(" ");
    let [typename,setTypeName]=useState(" ");

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      // setIsDelete(false);
    };
    const handleClose2 = () => {
      setOpen2(false);
      // setIsDelete(false);
    };
    const handleClose3 = () => {
      setOpen2(false);
      // setIsDelete(false);
    };
  const update=true;
const updateProp=()=>{
  nav(`/DetailsProperty/${idProp}/${idPropOwner}/${update}`)
}

    useEffect(() => {
      bringImagesFromServer(idProp).then((res)=>{
        console.log(res.data);
        let a=[];
        for(let i=0 ; i<res.data.length ; i++){
          arrImg.push(`http://localhost:8080/images/${res.data[i].Name}`)
        }
        setarrImg(arrImg);
     }).catch(err=>alert(err))
  
  
      getOwnerFromServer(idPropOwner).then(res => {
        setOwner(res.data[0])
        // console.log(res.data[0])
      }).catch(err => alert(err))
  
      userSelect != null &&
        //בדיקה האם אהבתי את הדירה
        getMyLikeFromServer(userSelect.Id, idProp).then((res) => {
          setIsLoved(res.data.length);
        }).catch(err => alert(err));

        //שולחים קוד סוג נכס ומקבלים את שם הנכס
getTypeByIdFromServer(idType).then((res)=>{
  // console.log(res)
  setTypeName(res.data[0].Name)
}).catch(err=>alert(err))
//שולחים קוד עיר ומקבלים את שם העיר
      getCityByIdFromServer(idCity).then((res)=>{
        setCityName(res.data[0].Name)
      }).catch(err=>alert(err))
    }, [])
  
  
    function back() {
      if (arrImg.length == 0) return;
      let lengthArrImg = arrImg.length;//3
      if (index == 0)
        setindex(lengthArrImg - 1);
      else setindex(index - 1);
      }
    function next() {
      if (arrImg.length == 0) return;
      let lengthArrImg = arrImg.length;//3
      if (index == lengthArrImg - 1)
        setindex(0);
      else setindex(index + 1);
  
      
    }
    function deleteOk(){
      NotActivePropFromServer(idProp).then((res) => {
        alert("הוסר בהצלחה")
        dis(DeleteProp(idProp));
        // window.location.reload(true)
        // dis(SaveUser(useselect))
        nav("/property")
      }).catch(err => alert(err));

      handleClose();
    }
    function updateOk(){
      ActivePropFromServer(idProp).then((res) => {
        alert("הועלה בהצלחה")
        dis(AddProp(props.props));
        // window.location.reload(true)
        // dis(SaveUser(useselect))
        nav("/property")
      }).catch(err => alert(err));

      handleClose2();
    }

  function deletepropfromWebsite(){
    DeletePropFromServer(idProp).then((res) => {
        alert("נמחק בהצלחה")
        dis(DeleteProp(idProp));
        // window.location.reload(true)
        // dis(SaveUser(useselect))
        nav("/property")
      }).catch(err => alert(err));

      handleClose2();
    }

    const bull = (
      <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        •
      </Box>
    );
  
    const nav = useNavigate();

    const [expanded, setExpanded] = React.useState(false);

    return <>
      <Card sx={{ maxWidth: 299 }}>
        <Link
        sx={{marginLeft:25,fontSize:15,paddingTop:-2}}
        disabled={false}
  component="button"
  underline="none"
  variant="plain"
  onClick={() => setOpen3(true)}
>
  להסרה<DeleteForever sx={{paddingTop:1}}/>
</Link>
      {/* <DeleteIcon onClick={() => setOpen3(true)}/> */}
      <Modal open={open3} onClose={() => setOpen3(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            level="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            !אזהרה
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
          מודעה זו תוסר לצמיתות מהאתר
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => setOpen3(false)}>
              ביטול
            </Button>
            <Button variant="solid" color="danger" onClick={() => {setOpen3(false)
            deletepropfromWebsite()}}>
             אישור
            </Button>
          </Box>
        </ModalDialog>
      </Modal>


        <div className="div-imges">

        {arrImg && arrImg.length ? 
        <>
         <IconButton className="arrow1" onClick={back} aria-label="arrow to left" sx={{position:"absolute", mt:15}} >
             <ArrowBackIosRoundedIcon sx={{color:grey[50], textShadow:10}}/>  
         </IconButton>
          <IconButton className="arrow2" onClick={next} aria-label="arrow to right" sx={{position:"absolute", mt:15, ml:30}} >
              <ArrowForwardIosRoundedIcon sx={{color:grey[50]}}/>
          </IconButton>

           <img className="imges" src={arrImg[index]} />
           </>
        :
              <div className="divNotImg"><p className="pp">בעל הנכס לא העלה תמונות</p></div>
             
              //  <IconButton className="arrow1" onClick={back} aria-label="arrow to left" sx={{position:"absolute", mt:15}} >
              //   <ImageIcon/>  
              //  </IconButton>
          }
           
         
        </div>
        <CardContent>
          {/*----------------------------------------- bull-נשלח לפונקציה
          שתשים נקודה בין בל מילה------------------------------------------------- */}
          <Typography variant="body2" color="text.secondary">
            {props.props && (
              <>
              {cityname}<br/>
                {typename}
                 {bull} {props.props.RoomNum} חד'{bull}{" "}
                {props.props.Sqm} מ"ר
              </>
            )}
          </Typography>
        </CardContent>
  
        <CardActions  disableSpacing >

{props.props.Active.data[0]==1 &&<Button
        variant="outlined"
        color="danger"
        endDecorator={<VisibilityOffIcon />}
        onClick={() => setOpen(true)}
      >
        להסרת המודעה
      </Button>
  }
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            component="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            מודעה זו תוסר מהאתר   
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
            האם אתה בטוח שברצונך להסיר מודעה זו מהאתר
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              ביטול
            </Button>
            <Button variant="solid" color="danger" onClick={() => {setOpen(false)
            deleteOk()}}>
              להסרה
            </Button>
          </Box>
        </ModalDialog>
      </Modal>



      {props.props.Active.data[0]==0 && <Button
        variant="outlined"
        color="success"
        endDecorator={<IosShareIcon />}
        onClick={() => setOpen2(true)}
      >
        להעלאת המודעה
      </Button>}

      <Modal open={open2} onClose={() => setOpen2(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            component="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            משתמשים יוכלו לצפות במודעה זו
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
            האם אתה בטוח שברצונך להעלות מודעה זו מהאתר
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => setOpen2(false)}>
              ביטול
            </Button>
            <Button variant="solid" color="danger" onClick={() => {setOpen2(false)
            updateOk()}}>
              להעלאה
            </Button>
          </Box>
        </ModalDialog>
      </Modal>

       

          <Fab color="secondary" aria-label="edit" id="icon-update"  onClick={updateProp}>

        <EditIcon />
      </Fab>

        </CardActions>



        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
      
      {/* {isDelete && <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           אתה בטוח שברצונך למחוק את הדירה
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={deleteOk} autoFocus>
            מחק
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  } */}
    </>
  }