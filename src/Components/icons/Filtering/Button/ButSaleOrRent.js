import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SaleOrRent from '../SaleOrRent';
import { useDispatch, useSelector } from 'react-redux';
import { getPropByTypeSale } from '../../../../Services';
import { AddToArrProp } from '../../../../store/Actions/PropAction';
import { DinnerDining } from '@mui/icons-material';
import { saveChooseTypeSaleFilter, saveTpeySale } from '../../../../store/Actions/FilterAction';
import { useState } from 'react';

export default function ButSaleOrRent() {
  const [open, setOpen] = React.useState(false);
  const selecttypesale=useSelector(state=>state.filter.typesale);
  const dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.choosetypesale);//האם בחרתי אם כן תשנה כפתור למלא

  function mychoose(){
    dis(saveChooseTypeSaleFilter(true))
    handleClose()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cancel = () => {
    dis(saveTpeySale(null))
    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        למכירה או להשכרה
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <SaleOrRent/>
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