// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Chip from '@mui/material/Chip';
// import { saveType } from '../../../store/Actions/FilterAction';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import {  getNamesType } from '../../../Services';
// import { useState } from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };



// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function TypeProp() {
//   const [names,setNames]=useState([]);
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);
//   const dis=useDispatch();
 
  // useEffect(()=>{
  //   let arr=[]
  //   getNamesType().then(res=>{
  //     for(let i=0;i<res.data.length;i++)
  //     {arr.push(res.data[i].Name)}
  //     setNames(arr);
  //     console.log(names)
  //   }).catch(err=>alert(err))
  // },[])


//   const handleChange = (event) => {
//     dis(saveType(event.target.value))
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );

    
//   };

//   return (
//     <div >
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-chip-label">Type</InputLabel>
//         <Select
//           labelId="demo-multiple-chip-label"
//           id="demo-multiple-chip"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((value) => (
//                 <Chip key={value} label={value} />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name+"1"}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { saveCity, saveType } from '../../../store/Actions/FilterAction';
import { useEffect } from 'react';
import { getAllNameCitysFromServer, getIdCityByNameFromServer, getIdType, getIdTypeSale, getNamesType } from '../../../Services';
import { useState } from 'react';

export default function TypeProp() {
  const dis=useDispatch();
  const [arrname,setArrName]=useState([])
  useEffect(()=>{
    let arr=[]
    getNamesType().then(res=>{
      for(let i=0;i<res.data.length;i++)
      {arr.push(res.data[i].Name)}
      setArrName(arr);
    }).catch(err=>alert(err))
  },[])
  function change(event){
    getIdType(event.target.innerText).then(res=>{
     dis(saveType(res.data[0].Id))
    }).catch(err=>alert(err))
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={arrname}
      sx={{width: 300 ,height:200}}
      renderInput={(params,i) => <TextField {...params} label="Movie" id="jjjjjjjjjjjjjjjjjj"/>}
      onChange={change}
    />
  );
}

