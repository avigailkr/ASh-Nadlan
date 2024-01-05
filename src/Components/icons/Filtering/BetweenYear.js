import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { saveFromYear, saveUntilYear, saveYears } from '../../../store/Actions/FilterAction';
import { useState } from 'react';

export default function BetweenYear() {
  let [year1, setYear1] = useState('');
  let [year2, setYear2] = useState('');
  const dis=useDispatch();

  const handleChange1 = (event) => {
    setYear1(event.target.value);
    dis(saveFromYear(event.target.value))
  };
  const handleChange2 = (event) => {
    setYear2(event.target.value);
    dis(saveUntilYear(event.target.value))
  };


  return (
    <Box sx={{ minWidth: 120 }} dir="rtl">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">מ...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year1}
          onChange={handleChange1}
         

        >
   <MenuItem value={2000}>2000</MenuItem>
  <MenuItem value={2001}>2001</MenuItem>
  <MenuItem value={2002}>2002</MenuItem>
  <MenuItem value={2003}>2003</MenuItem>
  <MenuItem value={2004}>2004</MenuItem>
  <MenuItem value={2005}>2005</MenuItem>
  <MenuItem value={2006}>2006</MenuItem>
  <MenuItem value={2007}>2007</MenuItem>
  <MenuItem value={2008}>2008</MenuItem>
  <MenuItem value={2009}>2009</MenuItem>
  <MenuItem value={2010}>2010</MenuItem>
  <MenuItem value={2011}>2011</MenuItem>
  <MenuItem value={2012}>2012</MenuItem>
  <MenuItem value={2013}>2013</MenuItem>
  <MenuItem value={2014}>2014</MenuItem>
  <MenuItem value={2015}>2015</MenuItem>
  <MenuItem value={2016}>2016</MenuItem>
  <MenuItem value={2017}>2017</MenuItem>
  <MenuItem value={2018}>2018</MenuItem>
  <MenuItem value={2019}>2019</MenuItem>
  <MenuItem value={2020}>2020</MenuItem>
  <MenuItem value={2021}>2021</MenuItem>
  <MenuItem value={2022}>2022</MenuItem>
  <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
-
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">עד...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year2}
          // label="Age"
          onChange={handleChange2}
        >
  <MenuItem value={2000}>2000</MenuItem>
  <MenuItem value={2001}>2001</MenuItem>
  <MenuItem value={2002}>2002</MenuItem>
  <MenuItem value={2003}>2003</MenuItem>
  <MenuItem value={2004}>2004</MenuItem>
  <MenuItem value={2005}>2005</MenuItem>
  <MenuItem value={2006}>2006</MenuItem>
  <MenuItem value={2007}>2007</MenuItem>
  <MenuItem value={2008}>2008</MenuItem>
  <MenuItem value={2009}>2009</MenuItem>
  <MenuItem value={2010}>2010</MenuItem>
  <MenuItem value={2011}>2011</MenuItem>
  <MenuItem value={2012}>2012</MenuItem>
  <MenuItem value={2013}>2013</MenuItem>
  <MenuItem value={2014}>2014</MenuItem>
  <MenuItem value={2015}>2015</MenuItem>
  <MenuItem value={2016}>2016</MenuItem>
  <MenuItem value={2017}>2017</MenuItem>
  <MenuItem value={2018}>2018</MenuItem>
  <MenuItem value={2019}>2019</MenuItem>
  <MenuItem value={2020}>2020</MenuItem>
  <MenuItem value={2021}>2021</MenuItem>
  <MenuItem value={2022}>2022</MenuItem>
  <MenuItem value={2023}>2023</MenuItem> 
        </Select>
      </FormControl>
    </Box>
  );
}

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

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

// const names = [
//   '2000',
//   '2001',
//   '2002',
//   '2003',
//   '2004',
//   '2005',
//   '2006',
//   '2007',
//   '2008',
//   '2009',
//   '2010',
//   '2011',
//   '2012',
//   '2013',
//   '2014',
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019', 
//   '2020',
//   '2021',
//   '2022',
//   '2023',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function BetweenYear() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Placeholder</em>;
//             }

//             return selected.join(', ');
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem disabled value="">
//             <em>Placeholder</em>
//           </MenuItem>
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       -

//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Placeholder</em>;
//             }

//             return selected.join(', ');
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem disabled value="">
//             <em>Placeholder</em>
//           </MenuItem>
//           {names.map((name) => (
//             <MenuItem
//               key={name}
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