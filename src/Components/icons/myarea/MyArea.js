import { useEffect, useState } from "react";
import { DeleteAllMassFromServer, getAllMyClientsFromServer, getAllPropertysByIdFromServer, getChatFromServer, getOwnerFromServer, getRoomFromServer } from "../../../Services";
import { useDispatch, useSelector } from "react-redux";
import CardProp from "../CardProp";
import Answer from "../../chat/Answer";
import { useNavigate } from "react-router-dom";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, Button, IconButton, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import CardMyArea from "./CardMyArea";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import OnePeople from "./OnePeople";
import { deleteChat, saveArrChat, selectedRoom } from "../../../store/Actions/ChatAction";
import Massage from "../../chat/Massage";
import CreateMasseg from "../../chat/CreateMasseg";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EastIcon from '@mui/icons-material/East';
//delete
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
import MassageMyArea from "./MassageMyArea";
import CreateMassegArea from "./CreateMassegArea";
//search
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function MyArea() {
const [arrmyprop,setArrMyProp]=useState([]);
const [arrmyclient,serArrMyClient]=useState([]);
const selectuser=useSelector(state=>state.user.selectedUser)
let idroom=useSelector(state => state.chat.selectedRoom);//חדר
const dis=useDispatch();
let [isDelete,setIsDelete]=useState(false);//שם בעל הנכס
const [open, setOpen] = useState(false);//מחיקה דיאלוג 
const selectNameClient=useSelector(state=>state.chat.client)
const [filteredList, setFilteredList] = useState(arrmyclient);
let arrMass=useSelector(state=>state.chat.arr);//מערך ההתכתבות עם משתמש מסויים

useEffect(()=>{//שליפת כל הדירות שלי   
  dis(saveArrChat([]))
    console.log(selectuser.Id);
    getAllPropertysByIdFromServer(selectuser.Id).then(res=>{
      console.log(res.data)

   setArrMyProp(res.data)}
   
   ).catch(err=>{alert(err)})
   //שליפת כל המשתמשים שהתכתבו איתי
   getAllMyClientsFromServer(selectuser.Id).then(res=>{
   serArrMyClient(res.data)
   setFilteredList(res.data)
   }
   
   ).catch(err=>{alert(err)})
          },[])

function search(e){
        // Access input value
        const query = e.target.value;
        console.log("query: "+query)
        // Create copy of item list
        var updatedList = [...arrmyclient];
        updatedList = updatedList.filter((item) => {
          return item.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    }


    const handleClose = () => {
      setOpen(false);
      setIsDelete(false);
    };

function isdelete() {
      setIsDelete(true)
      setOpen(true)
    }
    function deleteAllMass()
    {
        console.log("deleteAllMass")
        console.log(idroom)
        DeleteAllMassFromServer(idroom).then(res=>{
          alert("נמחק בהצלחה")
            //כאשר מחקת  תמחק מהסטייט
            dis(deleteChat());
        }).catch(err=>{console.log(err)
            console.log(err);});

            handleClose();
    }  
    return<>

 <div className="chatArea">   
 {arrMass.length!=0 && <p className="litel">התכתבות עם {selectNameClient}</p>}
 {arrMass.length==0 && <p className="litel">התכתבות עם הלקוחות</p>}
 {arrMass.length!=0 && <DeleteSweepIcon id="deleteAllMassArea" onClick={isdelete}/>}
 <div className="chat-list">
 <List
      sx={{
        maxWidth: 320,
        "--List-radius": "16px",
        "--List-padding": "19px",
      }}
    >
      <ListItem>
        <ListItemButton id="selected-chat" selected >
          <ListItemDecorator>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={6} color="error">
            <ChatIcon />
              </Badge>
            </IconButton>
          </ListItemDecorator>
          Chat
        </ListItemButton>
      </ListItem>

      <ListItem >
  <TextField
        id="txt-search"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={(e)=>{search(e)}}
      />
      </ListItem>
      <div className="all-onepeople">
      {filteredList.filter(x=>x.Active.data[0]==1).map((item,index)=>{return <div className="div-client" key={item.Id} >
         {/* מציג רק משתמשים פעילים */}
         <ListItem button key={item.Id}><OnePeople props={item}/></ListItem>
         
      </div>} )}
      </div>
    </List></div>
 

 {isDelete==true && <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           אתה בטוח שברצונך לנקות צאט זה 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={deleteAllMass} autoFocus>
            מחק
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  } 

  {/* קטע ההודעות */}
  {arrMass.length!=0 && <MassageMyArea />}

 {/* יצירת הודעה עם כפתור שלח */}
 {arrMass.length!=0 && <CreateMassegArea /> }
</div>


<div className="div-myprop">
    <h1 className="myprop-txt">הדירות שלי</h1>
{/* {arrmyprop.filter(x=>x.ActiveMyArea.data[0]==1).map((item,index)=>{return <div className="div-apartment" key={item.Id} > */}
{arrmyprop.map((item,index)=>{return <div className="div-apartment" key={item.Id} >

  <CardMyArea props={item} idcard={index} />
      </div>} )}
      </div>
</>
}