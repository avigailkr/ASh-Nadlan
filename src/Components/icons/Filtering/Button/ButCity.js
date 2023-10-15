import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import City from '../City'
import { getPropByCityFromServer } from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { AddToArrProp } from '../../../../store/Actions/PropAction';
export default function ButCity() {
  const [open, setOpen] = React.useState(false);
  const selectcity=useSelector(state=>state.filter.city);
  const dis=useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = () => {

console.log("selectcity")
console.log(selectcity)
    getPropByCityFromServer(selectcity).then(res=>{
      console.log(res.data)
      dis(AddToArrProp(res.data))
    }).catch(err=>alert(err))

    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            בצע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}