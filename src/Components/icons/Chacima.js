import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import MoreVertIcon from "@mui/icons-material/MoreVert";

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';//אייקון פרופיל
import { ChacimaUser } from '../../Services';

export default function Chacima(props) {
  let active=" ";
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const funcChacima = () => {
    setOpen((prevOpen) => !prevOpen);
      ChacimaUser(props.id).then(res=>console.log(res.data)).catch(err=>alert(err))
  };
  const funcUnChacima = () => {
    setOpen((prevOpen) => !prevOpen);
          alert("ביטול חסימההההההההה")

  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
     console.log(event);
    }

    setOpen(false);
    if(active=="חסימה")
    funcChacima();
    else 
    funcUnChacima();
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if(props.owner1){
    if(props.owner1.Active.data[0]==1)
    active="חסימה"
    else if(props.owner1.Active.data[0]==0)
    active="בטל חסימה"
  }
  return (
    <Stack direction="row" spacing={2}>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={funcChacima}
        >
           {/*--------------- אייקון שלוש נקודות --------------*/}
           <MoreVertIcon />
          {/* ------------------------------------------- */}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={funcChacima} value="profile">{active}</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
     
    </Stack>
  );
}