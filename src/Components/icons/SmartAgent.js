import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { DeleteSmartAgentFromServer, GetFromServerByIdSmartAgent } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { ButtonRoot } from '@mui/joy/Button/Button';
import { deleteFromArrSmartAgent } from '../../store/Actions/FilterAction';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  let arrsmartagent= useSelector(state=>state.filter.arrsmartagent)


  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
const dis=useDispatch();
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="dialog-smart-agent">...הסוכנים שלי</DialogTitle>
      <List sx={{ pt: 0,width:300 }}>
      {console.log(arrsmartagent)}
        {arrsmartagent!=[] && arrsmartagent.map((item) => (
           
          <ListItem disableGutters key={item.Id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <SmartToyOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${item.City}`?"ברחבי הארץ":`${item.City}`}
                    secondary={<>
                    בשנים: {item.FromYear+"-"+item.UntilYear} <br/>
                    מחיר: {item.FromPrice+"-"+item.UntilPrice}<br/>
                     מ"ר: {item.FromSize+"-"+item.UntilSize}<br/>
                     חדרים: {item.Room}<br/>
                     סוג הנכס:{`${item.TypeProp}`!=null ? `${item.TypeProp}`:"כל הסוגים"}<br/>
                     סוג מכירה: {`${item.TypeSale}`!=null?`${item.TypeSale}`:"למכירה ולהשכרה"}
                    </>} />
                    {/* <Button variant="outlined" color="error"> */}
                    <IconButton  variant="plain">
                    <DeleteIcon variant="outlined" color="error" onClick={()=>{
                      DeleteSmartAgentFromServer(item.Id)
                    .then(res=>{alert("הסוכן נמחק בהצלחה");
                    dis(deleteFromArrSmartAgent(item.Id))
                  
                  }).catch(err=>alert(err))}
} />
        </IconButton>
        
                    {/* </Button> */}
            </ListItem>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => {alert("להוספת סוכן לחץ על כפתור הסוכן לאחר הסינון")
                handleListItemClick('addAccount')}}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="הוסף סוכן" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SmartAgent() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SmartToyOutlinedIcon id="icon-smart-agent" color="primary" variant="outlined" onClick={handleClickOpen}/>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
