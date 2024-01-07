import { useSelector, useDispatch } from "react-redux";
import { SaveArrLike } from "../../../store/Actions/LikeAction";
import {
  getAllLikeByIdFromServer,
  getAllMyOwnerFromServer,
} from "../../../Services/index";
import CardProp from "../CardProp";
import { getMyLikeFromServer } from "../../../Services/index";
//calender
import * as React from "react";
import "../../style.css";
import CardBoard from "../../CardBoard";

import { useEffect, useState } from "react";
import { DeleteAllMassFromServer } from "../../../Services";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import OnePeople from "./OnePeopleBoard";
import {
  deleteChat,
  saveArrChat,
  selectedRoom,
} from "../../../store/Actions/ChatAction";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
//delete
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import MassageMyArea from "./MassageMyBoard";
import CreateMassegArea from "./CreateMassegBoard";
//search
import InputAdornment from "@mui/material/InputAdornment";
import MassageMyBoard from "./MassageMyBoard";
import CreateMassegBoard from "./CreateMassegBoard";
import {darkScrollbar} from "@mui/material";


export default function Board() {
  const [arrmyclient, serArrMyClient] = useState([]);
  const selectuser = useSelector((state) => state.user.selectedUser);
  let idroom = useSelector((state) => state.chat.selectedRoom); //חדר
  const dis = useDispatch();
  let [isDelete, setIsDelete] = useState(false); //שם בעל הנכס
  const [open, setOpen] = useState(false); //מחיקה דיאלוג
  const selectNameClient = useSelector((state) => state.chat.client);
  const [filteredList, setFilteredList] = useState(arrmyclient);
  let user = useSelector((state) => state.user.selectedUser);

 
  let arrMass=useSelector(state=>state.chat.arr);//מערך ההתכתבות עם משתמש מסויים

  useEffect(() => {
dis(saveArrChat([]))
    //שליפת כל הדירות שאהבתי
    getAllLikeByIdFromServer(user.Id)
      .then((res) => {
        dis(SaveArrLike(res.data));
        console.log(res.data);
      })
      .catch((er) => alert("error in bring arr property from server"));

    //שליפת כל בעלי הדירות שהתכתבתי איתם
    getAllMyOwnerFromServer(selectuser.Id)
      .then((res) => {
        
        serArrMyClient(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

   const ArrLike = useSelector((x) => x.like.arr);
   console.log(ArrLike);

  function search(e) {
    // Access input value
    const query = e.target.value;
    console.log("query: " + query);
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
    setIsDelete(true);
    setOpen(true);
  }
  function deleteAllMass() {
    console.log("deleteAllMass");
    console.log(idroom);
    DeleteAllMassFromServer(idroom)
      .then((res) => {
        alert("נמחק בהצלחה");
        //כאשר מחקת  תמחק מהסטייט
        dis(deleteChat());
      })
      .catch((err) => {
        console.log(err);
        console.log(err);
      });

    handleClose();
  }
 
  return (
    <div id="board-div">
      <div className="chatArea">

        {/* מה שהיה לפני השינוי */}
        {/* <p className="litel">chat with {selectNameClient}</p>
        <DeleteSweepIcon id="deleteAllMassArea" onClick={isdelete} />         */}

      {arrMass.length!=0 && <p className="litel">התכתבות עם {selectNameClient}</p>}      
      {arrMass.length==0 && <p className="litel">ההתכתבות עם בעלי הנכסים</p>}
      {arrMass.length!=0 && <DeleteSweepIcon id="deleteAllMassArea" onClick={isdelete} />}
        <div className="chat-list" >
          <List
            sx={{
              maxWidth: 320,
              "--List-radius": "16px",
              "--List-padding": "19px",
            }}
          >
            <ListItem>
              <ListItemButton id="selected-chat" selected>
                <ListItemDecorator>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={3} color="error">
                      <ChatIcon />
                    </Badge>
                  </IconButton>
                </ListItemDecorator>
                Chat
              </ListItemButton>
            </ListItem>

            <ListItem>
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
                onChange={(e) => {
                  search(e);
                }}
              />
            </ListItem>
            {/* ****************************************************************************** */}
            <div className="all-onepeople" >
              
              {filteredList
                    .filter((x) => x.Active.data[0] == 1)
                    .map((item, index) => {
                      return (
                    <div className="div-client"  key={item.Id}>
                      {/* מציג רק משתמשים פעילים */}
                      <ListItem button key={item.Id}>
                        <OnePeople props={item} />
                      </ListItem>
                    </div>
                  );
                })}
            
            </div>
          </List>
        </div>

        {isDelete == true && (
          <div>
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
        )}

        {/* קטע ההודעות */}
       {arrMass.length!=0 &&  <MassageMyBoard />}

        {/* יצירת הודעה עם כפתור שלח */}
       { arrMass.length!=0 &&  <CreateMassegBoard />}
        
      </div>

      <h1>לוח דירות</h1>

      <div id="table-div">
        {ArrLike.filter((x) => x.Active != null && x.Active.data[0] == 1).map(
          (item, index) => {
            return (
              <div className="div-apartment" key={item.Id}>
                <CardBoard props={item} idcard={index} />
              </div>
            );
          }
        )}
    
      </div>

    </div>
  );
}
