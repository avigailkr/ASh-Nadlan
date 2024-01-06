import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { ChacimaUser, getCityByIdFromServer } from '../../Services';
import { red } from '@mui/material/colors';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { SaveArrUsers, UpdateActiveArrUsers } from '../../store/Actions/UserAction';





export default function Users() {
  let users = useSelector((state) => state.user.arr);//כל המשתמשים
  let props = useSelector((state) => state.prop.arr);//כל הנכסים
  let fullarr=[];
  let allrows = useSelector(state=>state.user.arrusers)
  let dis=useDispatch()


  useEffect(() => {
    users != [] &&
      props != [] &&
      users.map((item, index) => { //עוברים על כל משתמש
        let details=[]
        let arr = props.filter((prop) => {//מסננים רק את הדירות של המשתמש הנוכחי
          return prop.IdUser == item.Id;
        });

        if(arr.length!=0)
 { arr.map((i, indexprop) => {
   getCityByIdFromServer(i.IdCity).then(res=>{"console.log(res.data)"
  console.log(res.data[0].Name)
let object={  
  idprop:i.Id,
  city:res.data[0].Name,
  adress:i.Adress,
  numroom:i.RoomNum,
  price:i.Price,
  sqm:i.Sqm,
  issaleorrent: i.IsSaleOrRent.data[0]==0 ?"למכירה":"להשכרה"
}

  details.push(object)
          }).catch(err=>alert(err))
        });
      
      }
        
       
      
       
        let obj = createData(
          item.Id,
          item.Name,
          item.Mail,
          item.Phone,
          arr.length,
          item.Active.data[0],
          details
        );

        fullarr.push(obj);
      });
      // 
      // setallRows(fullarr.slice(fullarr.length/2));

      console.log("fullarr.slice(fullarr.length/2)")
      console.log(fullarr.slice(fullarr.length/2))

      //חציתי את המערך ל 2 כי זה מכפיל לי את כמות המשתמשים
      dis(SaveArrUsers(fullarr.slice(fullarr.length/2)))
  }, []);
function createData(iduser,name,mail,phone,numprops,active,details) 
{

  return {
    iduser,
    name,
    mail,
    phone,
    numprops,
    active,
    
    details:details
}
}



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [isactive,setisactive]=useState(row.active)

  function block(id,active) {
 
    if(active==1){
      ChacimaUser(id,"true").then(res=>console.log(res.data)).catch(err=>alert(err))
    alert("משתמש זה נחסם")  
    setisactive(0)
  }
    else if(active==0){
      ChacimaUser(id,"false").then(res=>console.log(res.data)).catch(err=>alert(err))
    alert("משתמש זה פעיל באתר")
    setisactive(1)
  }
  
  let object={
    iduser:row.iduser,
    active:active==1?0:1
  }
  dis(UpdateActiveArrUsers(object))
  }
  
return (
    <React.Fragment>
      <TableRow >

        <TableCell >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        {row.name}
        </TableCell>
        <TableCell>{row.phone}</TableCell>
        <TableCell>{row.mail}</TableCell>
       
        <TableCell>{row.numprops}</TableCell> 
        <TableCell>
        {
        isactive == 0 ? 
        // <IconButton type='button' color="error"  >
            <><LockPersonIcon onClick={()=>{block(row.iduser,row.active)}}/></>
        //  </IconButton>  
        :
            // <IconButton type='button' color="success" >
                <LockOpenIcon onClick={()=>{block(row.iduser,row.active)}}/>
            // </IconButton>
       }
            </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                פרטי הנכסים
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>עיר</TableCell>
                    <TableCell>כתובת</TableCell>
                    <TableCell>מספר חדרים</TableCell>
                    <TableCell>מר</TableCell>
                    <TableCell>סוג מכירה</TableCell>
                    <TableCell>מחיר</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.length !=0 && row.details.map((details) => (
                    <TableRow key={details.idprop}>
                      <TableCell component="th" scope="row">
                        {details.city}
                      </TableCell>
                      <TableCell>{details.adress}</TableCell>
                      <TableCell>{details.numroom}</TableCell>
                      <TableCell>{details.sqm}</TableCell>
                      <TableCell>{details.issaleorrent}</TableCell>
                      <TableCell>{details.price}</TableCell> 
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const selectuser=useSelector(state=>state.user)

return (<>
   <Sheet
        sx={{
          '--TableCell-height': '60px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          height: 450,
          overflow: 'auto',
          background: (theme) =>
            `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 50% 0,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 50% 100%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            '0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%',
          backgroundColor: 'background.surface',
        }}
      >
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" sx={{width: '60%',marginLeft:45,marginTop:5}}>
        <TableHead>
          <TableRow sx={{color:"warning"}}>
            <TableCell />
            <TableCell>שם</TableCell>
            <TableCell align="right">טלפון</TableCell>
            <TableCell align="right">מייל</TableCell>
            <TableCell align="right">מספר נכסים</TableCell>
            <TableCell align="right">סטטוס</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {console.log("allrows")}
        {console.log(allrows)}

        {allrows.filter(x=>x.iduser!=selectuser.selectedUser.Id).map((row) =>  <>
            <Row key={row.id} row={row} />
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Sheet>
 </> );
}
