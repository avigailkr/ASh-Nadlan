import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../style.css"
import City from "./City"
import ButCity from './Button/ButCity';
import ButPrice from './Button/ButPrice';
import ButRoom from './Button/ButRoom';
import ButSize from './Button/ButSize';
import ButTypeProp from './Button/ButTypeProp';
import ButSaleOrBuy from './Button/ButSaleOrRent';
import ButAdd from './Button/ButAdd';
import ButBetween from './Button/ButBetweenYear';
export default function Filter() {

    let [variantBut,setvariantBut]=useState("outlined");

  return (
    <Stack spacing={2} direction="row" className='filter'>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined"><Link to="city">עיר</Link></Button> */}


<Button variant="outlined" href="#outlined-buttons">
        סנן
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        נקה
      </Button>



      <ButCity/>
      <ButSaleOrBuy/>
      <ButPrice/>
      <ButRoom/>
      <ButSize/>
      <ButTypeProp/>
      <ButAdd/>
      <ButBetween/>
      
    </Stack>
  );
}

