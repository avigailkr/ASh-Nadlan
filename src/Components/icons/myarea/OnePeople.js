import * as React from 'react';
import ListItemButton from '@mui/joy/ListItemButton';
import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ListItemDecorator } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { saveArrChat, saveIdClient, saveNameClient, saveStartAnswer, selectedRoom } from '../../../store/Actions/ChatAction';
import { useEffect } from 'react';
import { useState } from 'react';
import { getChatFromServer, getOwnerFromServer, getRoomFromServer } from '../../../Services';
import Badge from '@mui/material/Badge';
import CreateMassegArea from './CreateMassegArea';


const OnePeople=(details)=>{

  const [invisible, setInvisible] = React.useState(false);
  
  const dis=useDispatch();
  const userSelect = useSelector(state => state.user.selectedUser);// בעל הדירות ומשתמש נוכחי
  let clientid=details.props.Id;//הלקוח שאיתו אני מתכתבת

function savearrchat(){
          getRoomFromServer(userSelect.Id,clientid).then((res)=>{
            console.log("room: "+res.data)
              //עד שהפונקציה תעדכן בסטייט את החדר היא בינתיים ריקה ותוסיף חדר למרות שיש 
              //ולכן נשתמש בתשובה שחוזרת מהשרת שהיא אמיתית ונשלח אותה לפונקציה צאט
              if(res.data.length!=0) 
                 { 
                  dis(selectedRoom(res.data[0].Id));//כאשר מצאת את החדר תשמור את מס החדר בסטייט הכללי
                  chat(res.data[0].Id);
                 }
                }).catch(err=>alert(err))
}
function chat(idroom){
//כאשר נגיע לשליפת ההודעות לא תיהיה בעיה עם חדר שלא נפתח
//שולף את כל ההודעות של חדר זה

getChatFromServer(idroom).then((res)=>{
  //כאשר אתה מביא את ההתכתבות מהשרת תשמור אותו במערך בסטייט הכללי
 dis(saveArrChat(res.data))
}).catch(err=>alert(err))  

  dis(saveNameClient(details.props.Name))//כדי לשלוף באזור האישי בצאט את שמו של הלקוח הנוכחי
}
  return (<>
        <ListItemButton onClick={()=>{savearrchat()}}>
      <ListItemDecorator />
            <ListItemAvatar>
            <Badge color="secondary" variant="dot" invisible={invisible}>
            <Avatar alt={`${details.props.Mail.slice(0, 1)}`} src="o" />
            </Badge>

              {/* <Avatar alt={`${details.props.Mail.slice(0, 1)}`} src="o" /> */}
            </ListItemAvatar>
            <ListItemText primary={details.props.Name} secondary={details.props.Mail} />
            </ListItemButton>
  </>
  );
}
export default OnePeople;
