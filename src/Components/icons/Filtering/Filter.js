import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../style.css"
export default function Filter() {

    let [variantBut,setvariantBut]=useState("outlined");

  return (
    <Stack spacing={2} direction="row" className='filter'>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined"><Link to="city">עיר</Link></Button> */}

      <Button variant={variantBut} ><Link to="city" className='link'>עיר</Link></Button>
      <Button variant={variantBut}><Link to="typeprop" className='link'>סוג נכס</Link></Button>
      <Button variant={variantBut}><Link to="price" className='link'>מחיר</Link></Button>
      <Button variant={variantBut}><Link to="size">שטח</Link></Button>
      <Button variant={variantBut}><Link to="room">חדרים</Link></Button>
      <Button variant={variantBut}><Link to="price">מחירים שירדו לאחרונה</Link></Button>
    </Stack>
  );
}
