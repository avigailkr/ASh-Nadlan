import * as React from 'react';
import Button from '@mui/material/Button';
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
export default function ButTypeProp() {
  const [open, setOpen] = React.useState(false);
  let dis=useDispatch();
  const selecttype=useSelector(state=>state.filter.type)
  useEffect(()=>{SaveArrProp([])},[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = () => {
    console.log("selecttype")
    console.log(selecttype)
    for(let i=0;i<selecttype.length;i++){
      console.log(selecttype[i])
    getPropByType(selecttype[i]).then((res)=>{
      console.log("type")
      console.log(res.data)
      dis(AddToArrProp(res.data))
    }).catch(err=>alert(err))
  }
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            סנן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
