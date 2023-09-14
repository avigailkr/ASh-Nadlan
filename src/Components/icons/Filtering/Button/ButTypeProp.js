import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TypeProp from '../TypeProp';
import { getPropByType } from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { AddToArrProp, SaveArrProp } from '../../../../store/Actions/PropAction';
import { useEffect } from 'react';
import { saveChooseTypeFilter, saveType } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';
export default function ButTypeProp() {
  const [open, setOpen] = React.useState(false);
  let dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.choosetype);//האם בחרתי אם כן תשנה כפתור למלא

function mychoose(){
  dis(saveChooseTypeFilter(true))
  handleClose()
}

  useEffect(()=>{SaveArrProp([])},[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
    dis(saveType(null))
    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        סוג
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"בחר סוג דירה"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TypeProp/>
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
