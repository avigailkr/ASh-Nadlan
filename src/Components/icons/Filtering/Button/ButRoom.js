import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Room from '../Room';
import { useDispatch, useSelector } from 'react-redux';
import { getPropByRoom } from '../../../../Services';
import { AddToArrProp } from '../../../../store/Actions/PropAction';
import { saveChooseRoomFilter, saveRoom } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';

export default function ButRoom() {
  const [open, setOpen] = React.useState(false);
  const selectroom=useSelector(state=>state.filter.room)
  const dis=useDispatch()
  const ischoose=useSelector(state=>state.filter.chooseroom);//האם בחרתי אם כן תשנה כפתור למלא

function mychoose(){
  dis(saveChooseRoomFilter(true))
  handleClose()
}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
   dis(saveRoom(1))
    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        חדר
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"בחר מספר חדרים"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Room/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel}>ביטול</Button>
          <Button onClick={mychoose} autoFocus>
            בצע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}