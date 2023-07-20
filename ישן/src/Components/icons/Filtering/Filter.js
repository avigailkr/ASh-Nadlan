// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import "../../style.css"
// import City from "./City"
// export default function Filter() {

//     let [variantBut,setvariantBut]=useState("outlined");

//   return (
//     <Stack spacing={2} direction="row" className='filter'>
//       {/* <Button variant="contained">Contained</Button>
//       <Button variant="outlined"><Link to="city">עיר</Link></Button> */}

//       <Button variant={variantBut}><Link to="city" className='link'>עיר</Link></Button>
//       <Button variant={variantBut}><Link to="typeprop" className='link'>סוג נכס</Link></Button>
//       <Button variant={variantBut}><Link to="price" className='link'>מחיר</Link></Button>
//       <Button variant={variantBut}><Link to="size">שטח</Link></Button>
//       <Button variant={variantBut}><Link to="room">חדרים</Link></Button>
//       <Button variant={variantBut}><Link to="price">מחירים שירדו לאחרונה</Link></Button>
//     </Stack>
//   );
// }







import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';

export default function Filter() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
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



  let nav=useNavigate()
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Dashboard
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
             jjj
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

