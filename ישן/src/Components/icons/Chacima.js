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
import { useEffect } from 'react';
import { useState } from 'react';
import CardProp from './CardProp';
import Property from '../Property';
import { useNavigate } from 'react-router-dom';
import Call from '../Call';
// export default function Chacima(props) {
//   let active=" ";
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const funcChacima = () => {
//     setOpen((prevOpen) => !prevOpen);
//       ChacimaUser(props.id).then(res=>console.log(res.data)).catch(err=>alert(err))
//   };
//   const funcUnChacima = () => {
//     setOpen((prevOpen) => !prevOpen);
//           alert("ביטול חסימההההההההה")

//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//      console.log(event);
//     }

//     setOpen(false);
//     if(active=="חסימה")
//     funcChacima();
//     else 
//     funcUnChacima();
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   if(props.owner1){
//     if(props.owner1.Active.data[0]==1)
//     active="חסימה"
//     else if(props.owner1.Active.data[0]==0)
//     active="בטל חסימה"
//   }
//   return (
//     <Stack direction="row" spacing={2}>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={funcChacima}
//         >
//            {/*--------------- אייקון שלוש נקודות --------------*/}
//            <MoreVertIcon />
//           {/* ------------------------------------------- */}
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={funcChacima} value="profile">{active}</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
     
//     </Stack>
//   );
// }


export default function Chacima(props)  {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  let [active,setActive]=useState(false);
  let nav=useNavigate()

  useEffect(()=>{
    if(props.owner1){
      if(props.owner1.Active.data[0]==1)
      setActive(true);
      else if(props.owner1.Active.data[0]==0)
      setActive(false);
    }
  },[])

  const block = () => {//חסימת משתמש
    setActive(false)
    ChacimaUser(props.id,true).then(res=>console.log(res.data)).catch(err=>alert(err))
  };
  const unblock = ({ navigation: { navigate } }) => {//ביטול חסימה
    setActive(true)
    ChacimaUser(props.id,false).then(res=>console.log(res.data)).catch(err=>alert(err))
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    //כשאשר לחץ על אחד מהאפשרויות
    setOpen(false);
    if(event.target.value=="1"){
      alert(active)
      if(active==false){//אם המשתמש חסום לך לבטל את החסימהו
        unblock();
      }
      
      else if(active==true){
        block();
      }
     
    }
    

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
                    <MenuItem onClick={handleClose} value="1">{active ? "חסיהמ" : "בטל חסימה"}</MenuItem>
                   {/* <MenuItem onClick={handleClose} value="2">My account</MenuItem>
                    <MenuItem onClick={handleClose} value="3">Logout</MenuItem> */}
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
