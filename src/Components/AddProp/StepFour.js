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
import { getStatusFromServer,bringIdPropFromServer } from "../../Services";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { SaveArrStatus } from "../../store/Actions/PropAction";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const StepFour = ({ prevStep, nextStep, values }) => {
  const [plus, setPlus] = useState([]);
  const [value, setValue] = useState([]);
  const [sito, setSito] = useState(1);
  const [rihut, setRihut] = useState("ללא"); 
  const [discription, setDiscription]= useState("")
    const [idProp,setIdProp]=useState("");  
    let ind=0;
    console.log(plus)
  let dis=useDispatch();

    useEffect(()=>{
      getStatusFromServer().then(res=>{
          dis(SaveArrStatus(res.data))
          console.log(res.data)
      }).catch(er=>alert("error in bring arr property from server"))

      bringIdPropFromServer().then((res)=>{
        console.log(res.data[0].Id);
        setIdProp(res.data[0].Id);
      }).catch(err=>alert(err))
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
  
   nextStep({ ...values, plus, sito, rihut,discription,idProp });
 };
  return (<div className="addProp-main">
    

    <form onSubmit={handleNext} className="form__step">
      <Steps level={3}/>
      {/* <label id="mn">
       </label> */}
       {/* <Typography sx={{ml:59, mb:4}} variant="h5" gutterBottom>
       :מאפיינים נוספים     
          </Typography> */}

          <Typography sx={{ml:60, mb:2, mt:5}} variant="h6" gutterBottom>
          :בחר מה יש בנכס
          </Typography>
       
      <Box role="group" aria-labelledby="rank" sx={{mb:4}}>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
            ml:16
          }}
        >
          {['מרפסת','סורגים', 'ממד', 'מחסן', 'מעלית', 'חניה'].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none'}}
                  />
                )}
  
                <Checkbox
                 sx={{width:50, height:25}}
                  size="md"
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
                     //בדיקות תקינות: שלוחצים שוב על הכפתור זה לא מוסיף שוב 
                     let tmp= plus.indexOf(index+1)
                     tmp <0?
                         plus.push(index+1)
                      :
                      plus.splice(tmp, 1)
                                                            
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
    

   
    <Typography sx={{ml:58, mt:2}} variant="h6" gutterBottom>
     :בחר מה מצב הנכס
          </Typography>
    <RadioGroup
    row="true"
    orientation="horizontal"
    dir="rtl"
    sx={{mb:2, ml:20}}
    onChange={(e)=>SetId(e.target.value)}
  >
   { arrStatus.map((item)=>{return <>
     <FormControlLabel value={item.Status} label={item.Status} sx={{m:4}} control={<Radio />} />
     </>
    })}
  
  </RadioGroup>
   


<Typography sx={{ml:71, mt:2}} variant="h6" gutterBottom>
:ריהוט
  </Typography>

<RadioGroup
    row="true"
    defaultValue="ללא"
    orientation="horizontal"
    dir="rtl"
    sx={{mb:2, ml:51}}
    onChange={(e)=>setRihut(e.target.value)}
  >
    <FormControlLabel sx={{m:4}} value="1" control={<Radio />} label="מלא"  />
    <FormControlLabel sx={{m:4}} value="2" control={<Radio />} label="חלקי" />
    <FormControlLabel sx={{m:4}} value="3" control={<Radio />} label="ללא" />
  </RadioGroup>

  <label>
      </label>
      <Typography sx={{ml:53, mt:2, mb:4}} variant="h6" gutterBottom>
:תיאור הדירה (אופציונאלי)

  </Typography>

      <TextField
          id="outlined-multiline-flexible"
          multiline
          dir="rtl"
          sx={{width:500, ml:16}}
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