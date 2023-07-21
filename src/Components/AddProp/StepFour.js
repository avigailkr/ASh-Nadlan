import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Done from '@mui/icons-material/Done';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getStatusFromServer } from "../../Services";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { SaveArrStatus } from "../../store/Actions/PropAction";
import TextField from '@mui/material/TextField';

const StepFour = ({ prevStep, nextStep, values }) => {
  const [plus, setPlus] = useState({
    'מרפסת':false,
    'סורגים':false, 
    'ממד':false, 
    'מחסן':false, 
    'מעלית':false,
    'חניה':false
  });
  // const 
  // const [lastName, setLastName] = useState("");
  const [value, setValue] = useState([]);
  const [sito, setSito] = useState(1);
  const [rihut, setRihut] = useState("ללא"); 
  const [discription, setDiscription]= useState("")

  let dis=useDispatch();

    useEffect(()=>{
      getStatusFromServer().then(res=>{
          dis(SaveArrStatus(res.data))
          console.log(res.data)
      }).catch(er=>alert("error in bring arr property from server"))
  },[])
  
  let arrStatus=useSelector(x=>x.prop.arrStatus);

  const SetId=(e)=>{
    arrStatus.map((it)=>{
      if(it.Status==e)
      setSito(it.Id);
    })
  }

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep({ ...values, plus, sito, rihut,discription });
  };

  return (<div className="addProp-main">
    <Steps level={3}/>

    <form onSubmit={handleNext} className="form__step">
      
      <label id="mn">
      :מאפיינים נוספים     
       </label>
       <label>
        ?בחר מה יש בנכס
       </label>
      <Box role="group" aria-labelledby="rank" sx={{mb:4}}>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
          }}
        >
          {['מרפסת','סורגים', 'ממד', 'מחסן', 'מעלית', 'חניה'].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}
  
                <Checkbox
                  size="sm"
                  disableIcon
                  overlay
                  value={item}
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? 'soft' : 'outlined'}
                  onChange={(event) => {
                    if (event.target.checked) {                     
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                    //put in plus all options that selected.
                    let valu=event.target.value;
                    console.log(valu)
                      plus[valu]=(!plus[valu])
                     
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            ),
          )}
        </List>
      </Box>
    

    <label>
      ?בחר מה מצב הנכס
    </label>
    <RadioGroup
    row="true"
    defaultValue="חדש מהקבלן"
    orientation="horizontal"
    dir="rtl"
    sx={{mb:2}}
    onChange={(e)=>SetId(e.target.value)}
  >
   { arrStatus.map((item)=>{return <>
     <FormControlLabel value={item.Status} label={item.Status} sx={{m:2}} control={<Radio />} />
     </>
    })}
  
  </RadioGroup>
   

<label>
  :ריהוט
</label>

<RadioGroup
    row="true"
    defaultValue="ללא"
    orientation="horizontal"
    dir="rtl"
    sx={{mb:2}}
    onChange={(e)=>setRihut(e.target.value)}
  >
    <FormControlLabel sx={{m:2}} value="מלא" control={<Radio />} label="מלא"  />
    <FormControlLabel sx={{m:2}} value="חלקי" control={<Radio />} label="חלקי" />
    <FormControlLabel sx={{m:2}} value="ללא" control={<Radio />} label="ללא" />
  </RadioGroup>

  <label>
        תיאור הדירה (אופציונאלי)
      </label>
      <TextField
          id="outlined-multiline-flexible"
          multiline
          dir="rtl"
          maxRows={5}
          onChange={(e)=>{setDiscription(e.target.value)}}
        />
      
  <div className="div-but">
      <button type="submit" className="form__button">הבא</button>
      <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
  </div>
    </form>
    </div>
  );
};
export default StepFour;