import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BetweenYear from '../BetweenYear';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { saveChooseYearFilter, saveFromYear, saveIsClearFilter, saveUntilYear } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';

export default function ButBetweenYear() {
  const [open, setOpen] = React.useState(false);
  const dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.chooseyear);

  function mychoose(){
    dis(saveChooseYearFilter(true))
    console.log(ischoose)
    handleClose()
  }
  useEffect(()=>{
    dis(saveFromYear(2000))
    dis(saveUntilYear(2023))
  }
    ,[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
    dis(saveFromYear(2000))
    dis(saveUntilYear(2023))
    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        שנה
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"הכנס טווח שנים להעלאת המודעה"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <BetweenYear/>
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