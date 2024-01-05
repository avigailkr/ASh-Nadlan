import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Price from '../Price';
import { saveChoosePriceFilter, saveFromPrice, saveUntilPrice } from '../../../../store/Actions/FilterAction';
import { useDidMount } from '@withvoid/melting-pot';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function ButPrice() {
  const [open, setOpen] = React.useState(false);
const dis=useDispatch();
const ischoose=useSelector(state=>state.filter.chooseprice);//האם בחרתי אם כן תשנה כפתור למלא

function mychoose(){
  dis(saveChoosePriceFilter(true))
  handleClose()
}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function cancel(){
    dis(saveFromPrice(0))
    dis(saveUntilPrice(5000000000000))
    handleClose();
  }
  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        מחיר
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
      >
        <DialogTitle id="alert-dialog-title">
          {"בחר טווח מחירי דירות"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Price/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ml:3}} onClick={cancel}>ביטול</Button>
          <Button onClick={mychoose} autoFocus>
            בצע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}