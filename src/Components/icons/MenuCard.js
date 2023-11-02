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



const ITEM_HEIGHT = 48;

export default function MenuCard(props) {
  let [active,setActive]=useState(" ")
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
        {  <MenuItem onClick={deletead}>
          להסרת המודעה
        </MenuItem>
        }
      </Menu>
    </div>
  );
}