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
