import * as React from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import City from '../City'
// import { getPropByCityFromServer } from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { AddToArrProp } from '../../../../store/Actions/PropAction';
import { saveChooseCityFilter } from '../../../../store/Actions/FilterAction';
export default function ButCity() {
  const [open, setOpen] = React.useState(false);
  const dis=useDispatch();
  const ischoose=useSelector(state=>state.filter.choosecity);//האם בחרתי אם כן תשנה כפתור למלא
  let selectcity=useSelector(state=>state.filter.city);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = (event) => {
    console.log("event.target")
    console.log(selectcity)
    selectcity!=1 && dis(saveChooseCityFilter(true))
    // getPropByCityFromServer(selectcity).then(res=>{
    //   console.log(res.data)
    //   dis(AddToArrProp(res.data))
    // }).catch(err=>alert(err))

    handleClose();
  };

  return (
    <div>
      <Button variant={ischoose? "soft" : "outlined"} onClick={handleClickOpen}>
        עיר
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"

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
          <Button sx={{ml:3}} onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            בצע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}