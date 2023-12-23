import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChacimaUser, NotActivePropFromServer } from '../../Services';
import { useDispatch } from 'react-redux';
import { DeleteProp } from '../../store/Actions/PropAction';

import Button from '@mui/material/Button';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
import { LegendToggleSharp } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
  
  

const ITEM_HEIGHT = 48;

export default function MenuCard(props) {
  let [active,setActive]=useState(" ")
  let [isDelete, setIsDelete] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dis=useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose=()=>{
    setAnchorEl(null);
  }

  const block = () => {
    if(active=="חסימה"){
      ChacimaUser(props.owner1.Id,"true").then(res=>console.log(res.data)).catch(err=>alert(err))
    alert("משתמש זה נחסם")
    setActive("בטל חסימה")
  }
    else if(active=="בטל חסימה"){
      ChacimaUser(props.owner1.Id,"false").then(res=>console.log(res.data)).catch(err=>alert(err))
    alert("משתמש זה פעיל באתר")
    setActive("חסימה")
  }
  handleClose();
  };

const deletead=()=>{
  NotActivePropFromServer(props.idprop).then(res=>console.log(res.data)).catch(err=>alert(err))
  alert("דירה זו הוסרה מהאתר")
  dis(DeleteProp(props.idprop))
  handleClose();
}
 useEffect(()=>{
  if(props){
  if(props.owner1.Active.data[0]==1)
  setActive("חסימה")
  if(props.owner1.Active.data[0]==0)
  setActive("בטל חסימה")

}
  
 },[])

 const [openDelete, setOpenDelete] = React.useState(true);
 function isdelete() {
  setIsDelete(true)
  setOpenDelete(true);
}
function handleCloseDelete () {
  setOpenDelete(false);
  setIsDelete(false);
  setAnchorEl(null);//לסגור את התפריט
}
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {
          <MenuItem onClick={block}>
            {active}
          </MenuItem>}
        {  <MenuItem onClick={isdelete}>
          להסרת המודעה
        </MenuItem>
        }
      </Menu>





      {isDelete && <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openDelete}
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
          <Button onClick={handleCloseDelete}>ביטול</Button>
          <Button onClick={deletead} autoFocus>
            מחק
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  }



    </div>
  );
}