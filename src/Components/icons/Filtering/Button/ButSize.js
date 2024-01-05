
import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Size from '../Size';
import { useDispatch, useSelector } from 'react-redux';
import { getPropBySize } from '../../../../Services';
import { AddToArrProp } from '../../../../store/Actions/PropAction';
import { saveChooseSizeFilter, saveFromSize, saveUntilSize } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';

export default function ButSize() {
  const [open, setOpen] = React.useState(false);
  const dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.choosesize);//האם בחרתי אם כן תשנה כפתור למלא

function mychoose(){
  dis(saveChooseSizeFilter(true));
  handleClose()
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
    dis(saveFromSize(0))
    dis(saveUntilSize(2000))
    handleClose();
  };
  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        גודל
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
      >
        <DialogTitle id="alert-dialog-title">
          {"בחר טווח שטח רבוע"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Size/>
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