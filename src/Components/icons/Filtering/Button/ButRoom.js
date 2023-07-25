import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Room from '../Room';
import { useDispatch, useSelector } from 'react-redux';
import { getPropByRoom } from '../../../../Services';
import { AddToArrProp } from '../../../../store/Actions/PropAction';

export default function ButRoom() {
  const [open, setOpen] = React.useState(false);
  const selectroom=useSelector(state=>state.filter.room)
  const dis=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = () => {
    console.log("selectroom")
    console.log(selectroom)
    getPropByRoom(selectroom).then(res=>{
      console.log(res.data)
      dis(AddToArrProp(res.data))
    }).catch(err=>alert(err))
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            סנן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}