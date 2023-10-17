
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Add from '../Add';
import { useDispatch, useSelector } from 'react-redux';
import { saveChooseAddFilter } from '../../../../store/Actions/FilterAction';

export default function ButAdd() {
  const [open, setOpen] = React.useState(false);
  const ischoose=useSelector(state=>state.filter.chooseadd);
  const dis=useDispatch()
  function mychoose(){
    dis(saveChooseAddFilter(true))
     handleClose()
   }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant={ischoose ? "soft" : "outlined"} onClick={handleClickOpen}>
        סינונים נוספים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Add/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={mychoose} autoFocus>
            בצע
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}