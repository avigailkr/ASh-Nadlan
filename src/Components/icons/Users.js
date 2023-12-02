<<<<<<< HEAD

// import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

// export default function User() {
//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 100,
//   });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         {...data}
//         slots={{
//           toolbar: GridToolbar,
//         }}
//         initialState={{
//           ...data.initialState,
//           filter: {
//             ...data.initialState?.filter,
//             filterModel: {
//               items: [
//                 {
//                   field: 'rating',
//                   operator: '>',
//                   value: '2.5',
//                 },
//               ],
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }



import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import Table from '@mui/joy/Table';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { getCityByIdFromServer } from '../../Services';
import { red } from '@mui/material/colors';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
    // history: [
    //   {
    //     date: '2020-01-05',
    //     customerId: '11091700',
    //     amount: 3,
    //   },
    //   {
    //     date: '2020-01-02',
    //     customerId: 'Anonymous',
    //     amount: 1,
    //   },
    // ],
//   };
// }
function createData(iduser,name,mail,phone,active,numprops,details) 
{
  return {
    iduser,
    name,
    mail,
    phone,
    active,
    numprops,
    details:details
    // details: [
    //   {
    //     idprop:1,
    //     city: '2020-01-05',
    //     adress: '11091700',
    //     numroom: 3,
    //     price: 344,
    //     sqm:44,
    //     issaleorrent:"sale"
    //   },
    //   {
    //     idprop:2,
    //     city: '2020-01-05',
    //     adress: '11091700',
    //     numroom: 3,
    //     price: 344,
    //     sqm:44,
    //     issaleorrent:"sale"
    //   },
    // ],
    
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
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
        <TableCell>{row.active}</TableCell>
        <TableCell  >{row.numprops}</TableCell>
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
export default function Users() {
  let users = useSelector((state) => state.user.arr);//כל המשתמשים
  let props = useSelector((state) => state.prop.arr);//כל הנכסים
  let fullarr=[];
  let [allrows, setallRows] = useState([]);

  useEffect(() => {
    users != [] &&
      props != [] &&
      users.map((item, index) => { //עוברים על כל משתמש
        let details=[]
        let arr = props.filter((prop) => {//מסננים רק את הדירות של המשתמש הנוכחי
          return prop.IdUser == item.Id;
        });

        if(arr.length!=0)
 {       arr.map((i, indexprop) => {
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
        });}
        
        let active=item.Active.data[0]==1 ? "פעיל":"חסום" 
       
        let obj = createData(
          item.Id,
          item.Name,
          item.Mail,
          item.Phone,
          arr.length,
          active,
          details
        );
        console.log("פעילללל")
        console.log(item.Active.data[0])
        fullarr.push(obj);
      });
      setallRows(fullarr.slice(fullarr.length/2));//חציתי את המערך ל 2 כי זה מכפיל לי את כמות המשתמשים
  }, []);


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

          {allrows.map((row) =>  <>
            <Row key={row.name} row={row} />
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Sheet>
 </> );
}
=======
// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";
// import Chacima from "./Chacima";
// import Switch, { switchClasses } from '@mui/joy/Switch';

// //import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// //import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// //import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// //import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// function createData(
//   id,
//   // tz,
//   name,
//   mail,
//   phone,
//   active,
//   idprop,
//   price,
//   city,
//   issaleorrent,
//   inserDate
// ) {
//   return {
//     id,
//     // tz,
//     name,
//     mail,
//     phone,
//     active,

//     detailsprop: [
//       {
//         idprop: idprop,
//         price: price,
//         city: city,
//         issaleorrent: issaleorrent,
//         inserdate: inserDate,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
   
//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {/* {open ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />} */}
//             {open ? <p>up</p> : <p>down</p>}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.id}
//         </TableCell>
//         {/* <TableCell align="right">{row.id}</TableCell> */}
//         {console.log(row)}
//         {/* <TableCell align="left">{row.tz}</TableCell> */}
//         <TableCell align="left">{row.name}</TableCell>
//         <TableCell align="left">{row.mail}</TableCell>
//         <TableCell align="left">{row.phone}</TableCell>
//         <TableCell align="left">{row.active.data[0]}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 DetailsProps
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Id</TableCell>
//                     <TableCell>Price</TableCell>
//                     <TableCell>City</TableCell>
//                     <TableCell>IsSaleOrRent</TableCell>
//                     <TableCell>InsertDate</TableCell>
//                     {/* <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell> */}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.detailsprop.map((historyRow) => (
//                     <TableRow key={historyRow.idprop}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.idprop}
//                       </TableCell>
//                       <TableCell>{historyRow.price}</TableCell>
//                       <TableCell>{historyRow.city}</TableCell>
//                       <TableCell>{historyRow.issaleorrent==0?<p>תפוס</p>:<p>פנוי</p>}</TableCell>
//                       <TableCell>{historyRow.inserdate}</TableCell>


//                       {/* <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell> */}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }
// // Row.propTypes = {
// //   row: PropTypes.shape({
// //     calories: PropTypes.number.isRequired,
// //     carbs: PropTypes.number.isRequired,
// //     fat: PropTypes.number.isRequired,
// //     history: PropTypes.arrayOf(
// //       PropTypes.shape({
// //         amount: PropTypes.number.isRequired,
// //         customerId: PropTypes.string.isRequired,
// //         date: PropTypes.string.isRequired,
// //       })
// //     ).isRequired,
// //     name: PropTypes.string.isRequired,
// //     price: PropTypes.number.isRequired,
// //     protein: PropTypes.number.isRequired,
// //   }).isRequired,
// // };

// export default function Users() {
//   let users = useSelector((state) => state.user.arr);
//   let props = useSelector((state) => state.prop.arr);
//   let [rows, setRows] = useState([]);
//   const [checked, setChecked] = React.useState(false);

//   //let rows=[]
//   let fullarr = [];
//   useEffect(() => {
//     users != [] &&
//       props != [] &&
//       users.map((item, index) => {
//         //   <IconButton aria-label="settings">
//         //   <Chacima id={item.Id} owner1={item}/>eeeeeeeeeeeeee
//         // </IconButton>
//         let arr = props.filter((pro) => {
//           return pro.IdUser == item.Id;
//         });
//         arr.map((i, indexprop) => {
//           let obj = createData(
//             item.Id,
//             // item.Tz,
//             item.Name,
//             item.Mail,
//             item.Phone,
//             i.Active,
//             i.Id,
//             i.Price,
//             i.IdCity,
//             i.IsSaleOrRent,
//             i.InsertDate
//           );
//           fullarr.push(obj);
//         });
//       });
//     setRows(fullarr);
//     console.log("rowsssefectt");
//     console.log(rows);
//   }, []);
//   if (rows.length != 0) {
//     console.log("pppppppppppppppppp");
//     console.log(rows);
//   }
//   return (
//     rows.length != 0 && (
//       <TableContainer component={Paper}>
//         <Table aria-label="collapsible table">
//           <TableHead>
//             <TableRow>
//               <TableCell />
//               <TableCell>IdUser</TableCell>
//               {/* <TableCell>Tz</TableCell> */}
//               <TableCell>Name</TableCell>
//               <TableCell>Mail</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Active</TableCell>

//               {/* <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {console.log("rows")}
//             {console.log(rows)}
//             {rows != [] && rows.map((row) => {<Row key={row.id} row={row} />
//             // { <Switch
//             //   color={checked ? 'success' : 'danger'}
//             //   checked={checked}
//             //   onChange={(event) => setChecked(event.target.checked)}
//             //   sx={{
//             //     '--Switch-thumbSize': '16px',
//             //     '--Switch-trackWidth': '40px',
//             //     '--Switch-trackHeight': '24px',
//             //     '--Switch-trackBackground': '#EE5E52',
//             //     '&:hover': {
//             //       '--Switch-trackBackground': '#EE5E52',
//             //     },
//             //     [`&.${switchClasses.checked}`]: {
//             //       '--Switch-trackBackground': '#5CB176',
//             //       '&:hover': {
//             //         '--Switch-trackBackground': '#5CB176',
//             //       },
//             //     },
//             //   }}
//             // />}
//           })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     )
//   );
// }

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function User() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={{
          ...data.initialState,
          filter: {
            ...data.initialState?.filter,
            filterModel: {
              items: [
                {
                  field: 'rating',
                  operator: '>',
                  value: '2.5',
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}
>>>>>>> 973775d (17.10.23 a)
