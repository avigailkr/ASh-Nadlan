import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import City from '../City'
import { getPropByCityFromServer } from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { AddToArrProp, SaveArrProp } from '../../../../store/Actions/PropAction';
import { saveChooseCityFilter, saveCity, saveIsClearFilter } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';
import { useEffect } from 'react';
export default function ButCity() {
  const [open, setOpen] = React.useState(false);
  const dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.choosecity);//האם בחרתי אם כן תשנה כפתור למלא
  
function mychoose(){
 dis(saveChooseCityFilter(true))
  handleClose()
}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
   dis(saveCity(null))
    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose ? "soft" : "outlined"} onClick={handleClickOpen}>
        עיר
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"בחר עיר"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{height: 100,padding:4}}>
           <City/>
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