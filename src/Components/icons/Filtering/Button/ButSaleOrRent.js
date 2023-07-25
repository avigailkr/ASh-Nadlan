import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SaleOrRent from '../SaleOrRent';
import { useDispatch, useSelector } from 'react-redux';
import { getPropByTypeSale } from '../../../../Services';
import { AddToArrProp } from '../../../../store/Actions/PropAction';

export default function ButSaleOrRent() {
  const [open, setOpen] = React.useState(false);
  const selecttypesale=useSelector(state=>state.filter.typesale);
  const dis=useDispatch();
  let idtype=null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filter = () => {
    if(selecttypesale=='השכרה')
    idtype=2
    else
    idtype=1
console.log("selecttypesale")
console.log(selecttypesale+" "+idtype)

getPropByTypeSale(idtype).then(res=>{
  console.log(res.data)
  dis(AddToArrProp(res.data))
}).catch(err=>alert(err))
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        למכירה או להשכרה
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
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
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={filter} autoFocus>
            סנן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}