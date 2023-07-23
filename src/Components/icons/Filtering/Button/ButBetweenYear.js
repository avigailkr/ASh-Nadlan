import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BetweenYear from '../BetweenYear';
import { getPropByYear } from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { AddToArrProp, SaveArrProp } from '../../../../store/Actions/PropAction';
import { useEffect } from 'react';
import { saveFromYear, saveUntilYear } from '../../../../store/Actions/FilterAction';

export default function ButBetweenYear() {
  const [open, setOpen] = React.useState(false);
  const dis=useDispatch();
  const selectyears=useSelector(state=>state.filter);

  useEffect(()=>{
    dis(saveFromYear(null))
    dis(saveUntilYear(null))
  }
    ,[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = () => {
    let from=selectyears.fromyear;
    let until=selectyears.untilyear;
    if(from==null) from=2000;
    if(until==null) until=2023;
    getPropByYear(from,until).then((res)=>{
      console.log(res.data)
      dis(AddToArrProp(res.data))
    }).catch(err=>alert(err))
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            סנן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}