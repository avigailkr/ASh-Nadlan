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
<<<<<<< HEAD
  import { red, grey} from "@mui/material/colors";
=======
  import { red } from "@mui/material/colors";
>>>>>>> 973775d (17.10.23 a)
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import ShareIcon from "@mui/icons-material/Share";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import { useNavigate } from "react-router-dom"; //אפשרות ניתוב לפי הניתובים שהגדרת
  import "../style.css";
  import Link from '@mui/material/Link';
  //---------- שם נקודה בין שתי מילים- נקודה אמצעית-----------------------
  import Box from "@mui/material/Box";
  //-----------------------------פח------------------------
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  //-------------------- חצים
  //back
  // import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
  //next
  // import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
  import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
<<<<<<< HEAD
  import MenuCard from "./MenuCard";
=======
  import Chacima from "./Chacima";
>>>>>>> 973775d (17.10.23 a)
  import { hover } from "@testing-library/user-event/dist/hover";
  import { useDispatch, useSelector } from "react-redux";
  import { AddLikeFromServer, DeleteLikeFromServer, DeletePropFromServer, getAllImgsByIdFromServer, getMyLikeFromServer, getOwnerFromServer, bringImagesFromServer } from "../../Services";
  import { useState } from "react";
  import { useEffect } from "react";
  import { DeleteProp } from "../../store/Actions/PropAction";
<<<<<<< HEAD
=======
  import { grey} from '@mui/material/colors';
>>>>>>> 973775d (17.10.23 a)

  
  //delete
  
  import Button from '@mui/material/Button';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
import { LegendToggleSharp } from "@mui/icons-material";
<<<<<<< HEAD
import Stack from '@mui/material/Stack';
=======
>>>>>>> 973775d (17.10.23 a)
  
  
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
  
  export default function CardProp(props) {
    let dis = useDispatch();
    let userSelect = useSelector(state => state.user.selectedUser);
    let idProp = props.props.Id;
    let idPropOwner = props.props.IdUser;
    let [owner, setOwner] = useState(null);
    let [isLoved, setIsLoved] = useState(0);
    let [arrImg, setarrImg] = useState([]);
    let [index, setindex] = useState(0);
    let [isDelete, setIsDelete] = useState(false);
    let [imgServer, setImgServer]=useState([]);
  
  
    const [open, setOpen] = React.useState(true);
<<<<<<< HEAD

=======
>>>>>>> 973775d (17.10.23 a)
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setIsDelete(false);
    };
  
    useEffect(() => {
<<<<<<< HEAD
=======
      //כל התמונות של דירה זו
      // getAllImgsByIdFromServer(idProp).then((res) => {
      //   setarrImg(res.data);
      // }).catch(err => alert(err))
>>>>>>> 973775d (17.10.23 a)

      //bring all images from server the sql table images
      bringImagesFromServer(idProp).then((res)=>{
        console.log(res.data);
        let a=[];
        for(let i=0 ; i<res.data.length ; i++){
          arrImg.push(`http://localhost:8080/images/${res.data[i].Name}`)
        }
        setarrImg(arrImg);
     }).catch(err=>alert(err))
  
<<<<<<< HEAD
=======
      // let par=[];
     //bring all images from images file in server
    //  bringImagesFileFromServer().then((res)=>{
    //         console.log(res.data);

    //  })
  
>>>>>>> 973775d (17.10.23 a)
      getOwnerFromServer(idPropOwner).then(res => {
        setOwner(res.data[0])
      }).catch(err => alert(err))
  
      userSelect != null &&
        //בדיקה האם אהבתי את הדירה
        getMyLikeFromServer(userSelect.Id, idProp).then((res) => {
          setIsLoved(res.data.length);
        }).catch(err => alert(err));
    }, [])
  
  
    function back() {
      if (arrImg.length == 0) return;
      let lengthArrImg = arrImg.length;//3
      if (index == 0)
        setindex(lengthArrImg - 1);
      else setindex(index - 1);
<<<<<<< HEAD
      }
=======
  
      //console.log(index)
    }
>>>>>>> 973775d (17.10.23 a)
    function next() {
      if (arrImg.length == 0) return;
      let lengthArrImg = arrImg.length;//3
      if (index == lengthArrImg - 1)
        setindex(0);
      else setindex(index + 1);
  
      
    }
    const funfavorites = () => {
      let like = {
        iduser: userSelect.Id,
        idprop: idProp
      }
  
      if (isLoved == 0) {
        AddLikeFromServer(like).then(() => {
          setIsLoved(1);
        }).catch(err => alert(err))
      }
  
      else {
        DeleteLikeFromServer(userSelect.Id, idProp).then(() => {
          setIsLoved(0);
        }).catch(err => alert(err))
      }
  
  
    }

    
    function isdelete() {
      setIsDelete(true)
    }
    function deleteOk(){
      DeletePropFromServer(idProp).then((res) => {
        alert("נמחק בהצלחה")
        dis(DeleteProp(idProp));
  
      }).catch(err => alert(err));

      handleClose();
    }
  
    const bull = (
      <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        •
      </Box>
    );
  
    const nav = useNavigate();
  
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
<<<<<<< HEAD
    const update=false;

=======
  
>>>>>>> 973775d (17.10.23 a)
     //details of property
  const goTodetails=()=>{
    console.log("gotodetails");
    console.log(idProp)
<<<<<<< HEAD
    nav(`/DetailsProperty/${idProp}/${idPropOwner}/${update}`);
=======
    nav(`/DetailsProperty/${idProp}`);
>>>>>>> 973775d (17.10.23 a)
  }

    const [expanded, setExpanded] = React.useState(false);
  
    // {arrImg.length!=0 &&  console.log(arrImg[0].ImgSrc)}
    let nameSlice = ' ';
  
    if (owner != null) {
      nameSlice = `${owner.Mail.slice(0, 1)}`;
    }


    return <>
      <Card sx={{ maxWidth: 299 }}>
        {
          (userSelect && owner != null && userSelect.IdTypeUser == 1) &&
  
          <CardHeader sx={owner.Active.data[0] == 0 && { backgroundColor: "red" }}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {nameSlice}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
<<<<<<< HEAD
                <MenuCard id={owner.Id} owner1={owner} />
=======
                <Chacima id={owner.Id} owner1={owner} />
>>>>>>> 973775d (17.10.23 a)
              </IconButton>
            }
  
            // getOwnerFromServer-שליפת השם והמייל של המוכר מהשרת 
            title={owner.Name}
            subheader={owner.Mail}
          // subheader={(owner!={} && owner.Active.data[0]===0) && <p>*חסום</p>}
  
  
          />
        }
  
        <div className="div-imges">
<<<<<<< HEAD
{arrImg.length != [] ? <>
=======
>>>>>>> 973775d (17.10.23 a)
         <IconButton className="arrow1" onClick={back} aria-label="arrow to left" sx={{position:"absolute", mt:15}} >
             <ArrowBackIosRoundedIcon sx={{color:grey[50], textShadow:10}}/>  
         </IconButton>
          <IconButton className="arrow2" onClick={next} aria-label="arrow to right" sx={{position:"absolute", mt:15, ml:30}} >
              <ArrowForwardIosRoundedIcon sx={{color:grey[50]}}/>
          </IconButton>

<<<<<<< HEAD
          <img className="imges" src={arrImg[index]} />
           </>
           :<div className="divNotImg"><p className="pp">בעל הנכס לא העלה תמונות</p></div>
           }
=======
          {arrImg.length != [] && <img className="imges" src={arrImg[index]} />}

>>>>>>> 973775d (17.10.23 a)
          
        </div>
        <CardContent>
          {/*----------------------------------------- bull-נשלח לפונקציה
          שתשים נקודה בין בל מילה------------------------------------------------- */}
          <Typography variant="body2" color="text.secondary">
            {props.props && (
              <>
                {props.props.kind} {bull} {props.props.RoomNum} חד'{bull}{" "}
                {props.props.Sqm} מ"ר
              </>
            )}
          </Typography>
        </CardContent>
  
        <CardActions disableSpacing>
  
          <IconButton aria-label="add to favorites" id="butfavor" onClick={() => { userSelect != null ? funfavorites():
           nav("/login") }} >
            {isLoved == 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </IconButton>
<<<<<<< HEAD
          <Button variant="text" onClick={()=>{goTodetails(idProp)}}>ראה עוד</Button>  
=======
          <label onClick={()=>{goTodetails(idProp)}}>ראה עוד</label>  
>>>>>>> 973775d (17.10.23 a)
  
          {(userSelect && userSelect.IdTypeUser == 1) && <IconButton aria-label="delete">
            <DeleteForeverIcon onClick={isdelete} />
          </IconButton>}
          {userSelect && userSelect.Id != idPropOwner && <input type="button" className="but-chat" onClick={fun} value="chat" />}
          {userSelect && userSelect.Id == idPropOwner && <input type="button" className="but-chat" onClick={answer} value="answer" />}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
      
      {isDelete && <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"אתה בטוח שברצונך למחוק את הדירה"}
        </DialogTitle> */}
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
  }
    </>
  }
  
  
  
  
  
  
  
  
  
  
  
  {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Chacima />
            </IconButton>
          }
  
          // getUserByIdFromServer-שליפת השם והמייל של המוכר מהשרת 
          title={props.props.userId}
          subheader="September 14, 2016"
        /> */}