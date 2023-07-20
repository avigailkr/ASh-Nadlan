import './App.css';
import "./Components/style.css";
import NavBar from './Components/NavBar';
import Property from './Components/Property';
import Board from './Components/Board';
import Forum from './Components/Forum';
import Answer from './Components/chat/Answer';
import IndexStatistic from './Components/IndexStatistic';
import About from './Components/About';
import Help from './Components/Help';
import Chat  from './Components/chat/Chat';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Profile from './Components/icons/Profile';
import Register from './Components/Register';
import Login from './Components/Login';
import MyProfile from './Components/icons/MyProfile';
import Exit from './Components/Exit';
import { useSelector } from 'react-redux';
import Form from './Components/AddProp/Form';
import Chacima from './Components/icons/Chacima';
import Users from './Components/icons/Users';
import City from './Components/icons/Filtering/City';
import Size from './Components/icons/Filtering/Size';
import Room from './Components/icons/Filtering/Room';
import Price from './Components/icons/Filtering/Price';
import TypeProp from './Components/icons/Filtering/TypeProp';
import { useEffect, useState } from 'react';
import { getNumPropToSaleOrRent } from './Services';




// import ChatF from './Components/ChatF';
function App() {
  const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
  let [sale,setSale]=useState(0);
  let [rent,setRent]=useState(0);
  
 useEffect(()=>{
  //מספר דירות פנויותתת
  getNumPropToSaleOrRent(1).then(res=>setSale(res.data[0]["count(*)"])).catch(err=>alert(err))
  getNumPropToSaleOrRent(2).then(res=>setRent(res.data[0]["count(*)"])).catch(err=>alert(err))

 },[])
 
  return (
  <div className="App">

    <div className='title-div'> 
  <img id="img-logo"  src='image/1.jpeg'/> 
    <div className='title-div-txt'>  
    <p id="title2">{rent}     להשכרה  </p>
    <p id="title">אש נדלן</p>
    <p id="title2">{sale}     למכירה</p>
    </div>
    </div>
    {selectUser!=null &&<Profile/>}

    {/* <div id="div-title"><h1 id="title"> אש נדלן</h1><h2 id="title2">89654 הושכרו    3898 נמכרו</h2></div><br/> */}
     <NavBar/> 
     {/* <Chacima/> */}
     {/* <Board/> */}
     {/* <City/>
     <Size/>
     <Room/>
    <Price/>
    <TypeProp/> */}
    
     {/* <ChatF/> */}
     {/* index-
     localhost:3000 כאשר אין ניתוב
      תציג את הדירות */}
<Routes>
<Route index element={<Property/>}/>
<Route path="property" element={<Property/>}/>
<Route path="addProp" element={<Form/>}/>
<Route path="board" element={<Board/>}/>
<Route path="forum" element={<Forum/>}/>
<Route path="statistic" element={<IndexStatistic/>}/>
<Route path="help" element={<Help/>}/>
<Route path="about" element={<About/>}/>
<Route path="chat/:id"  element={<Chat />} />
<Route path="answer"  element={<Answer />} />
<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="myprofile" element={<MyProfile/>}/>
<Route path="users" element={<Users/>}/>
<Route path="exit" element={<Exit/>}/>

<Route path="city" element={<City/>}/>
<Route path="size" element={<Size/>}/>
<Route path="room" element={<Room/>}/>
<Route path="price" element={<Price/>}/>
<Route path="typeprop" element={<TypeProp/>}/>

</Routes>
{/* <Collage/> */}


  </div>
  );
}

export default App;
