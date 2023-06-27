// import { useEffect } from "react";
// import { getAllUsersFromServer } from "../../Services";
// import { useSelector } from "react-redux";

// const Users = () => {
//   const users = useSelector((state) => state.user.arr);
// console.log(users)
//   return (
//     <>

    //   <div className="all-users">
    //     {users != [] &&
    //       users.map((item, index) => {
    //         return (
    //           <div className="div-user" key={item.Id}>
    //             iii:{item.id}
    //           </div>
    //         );
    //       })
    // }
    //   </div>
//     </>
//   );
// };
// export default Users;

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
//import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
function createData(id, tz, name, mail, phone, active,idprop,price,city,isSale,inserDate) {
  return {
    id,
    tz,
    name,
    mail,
    phone,
    active,

    detailsprop: [
      {
        idprop:idprop,
        price: price,
        city: city,
        issale:isSale,
        inserdate:inserDate
      }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {/* {open ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />} */}
            {open ? <p>up</p> : <p>down</p>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        {/* <TableCell align="right">{row.id}</TableCell> */}
        <TableCell align="left">{row.tz}</TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.mail}</TableCell>
        <TableCell align="left">{row.phone}</TableCell>
        <TableCell align="left">{row.active.data[0]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                DetailsProps
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>IsSale</TableCell>
                    <TableCell>InsertDate</TableCell>
                    {/* <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detailsprop.map((historyRow) => (
                    <TableRow key={historyRow.idprop}>
                      <TableCell component="th" scope="row">
                        {historyRow.idprop}
                      </TableCell>
                      <TableCell>{historyRow.price}</TableCell>
                      <TableCell>{historyRow.city}</TableCell>
                      <TableCell>{historyRow.issale.data[0]}</TableCell>
                      <TableCell>{historyRow.inserdate}</TableCell>
                      {/* <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
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

// Row.propTypes = {
    
//   row: PropTypes.shape({
//     Id: PropTypes.string.isRequired,
//     Tz: PropTypes.string.isRequired,
//     Name: PropTypes.string.isRequired,
//     Mail: PropTypes.string.isRequired,
//     Phone: PropTypes.number.isRequired,
//     Active: PropTypes.bool.isRequired,
//     DetailsProp: PropTypes.arrayOf(
//       PropTypes.shape({
//         IdProp: PropTypes.number.isRequired,
//         Price: PropTypes.number.isRequired,
//         City: PropTypes.number.isRequired,
//         IsSale: PropTypes.bool.isRequired,
//         InsertDate: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     // name: PropTypes.string.isRequired,
//     // price: PropTypes.number.isRequired,
//     // protein: PropTypes.number.isRequired,
//   }).isRequired,
// };
Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };



export default function Users() {

      let users = useSelector((state) => state.user.arr);
      let props=useSelector(state=>state.prop.arr)
      let [rows,setRows]=useState([]);
    //let rows=[]
    let fullarr=[]
      useEffect(()=>{
            (users != [] && props!=[]) &&
            users.map((item, index) => 
            {
                let arr=props.filter((pro) => { return pro.IdUser == item.Id })
                arr.map((i,indexprop)=>{
                    let obj=createData(item.Id, item.Tz, item.Name, item.Mail, item.Phone,item.Active,
                        i.Id,i.Price,i.IdCity,i.IsSale,i.InsertDate)
                        fullarr.push(obj)
                })
            })
            setRows(fullarr)
                console.log("rowsssefectt")
                console.log(rows)
      },[])
      if(rows.length!=0){

        console.log("pppppppppppppppppp")
        console.log(rows)
      }
     return (
        rows.length!=0 && <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>IdUser</TableCell>
                    <TableCell>Tz</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Mail</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Active</TableCell>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
            {console.log("rows")}
           {console.log(rows)}
          {rows!=[] && rows.map((row) => (
             <Row key={row.id} row={row} />
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
