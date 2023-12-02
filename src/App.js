import "./App.css";
import "./Components/style.css";
import NavBar from "./Components/NavBar";
import Property from "./Components/Property";
import DetailsProperty from './Components/DetailsProperty';
import Forum from "./Components/Forum";
import Answer from "./Components/chat/Answer";
import IndexStatistic from "./Components/icons/Statistic/IndexStatistic";
import About from "./Components/About";
import Help from "./Components/Help";
import Chat from "./Components/chat/Chat";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./Components/icons/Profile";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MyProfile from "./Components/icons/MyProfile";
import Exit from "./Components/Exit";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Components/AddProp/Form";
import Users from "./Components/icons/Users";
import City from "./Components/icons/Filtering/City";
import Size from "./Components/icons/Filtering/Size";
import Room from "./Components/icons/Filtering/Room";
import Price from "./Components/icons/Filtering/Price";
import TypeProp from "./Components/icons/Filtering/TypeProp";
import { useEffect, useRef, useState } from "react";
import { getNumPropToSaleOrRent, sendEmail } from "./Services";
import Statistic1 from "./Components/icons/Statistic/Statistic1";
import Statistic2 from "./Components/icons/Statistic/Statistic2";
import Statistic3 from "./Components/icons/Statistic/Statistic3";
import Statistic4 from "./Components/icons/Statistic/Statistic4";
import Mui from "./Components/Mui";
import MyArea from "./Components/icons/myarea/MyArea";
import OnePeople from "./Components/icons/myarea/OnePeople";
import Board from "./Components/icons/board/Board";
import { Email } from "./Email";
import FormField from "./Components/FormField";

import Infomation from "./Components/infomation/Infomation";
import Err from "./Components/Err";
import { bringAllImagesFromServer } from "./Services";
import { SaveArrImg } from "./store/Actions/ImgAction";
import Uplaoded from "./Components/Uplaoded";
import Update from "./Components/icons/myarea/Update";

// import ChatF from './Components/ChatF';
function App() {
  const selectUser = useSelector((state) => state.user.selectedUser); //שליפה של המשתמש הנוכחי שהתחבר
  let [sale, setSale] = useState(0);
  let [rent, setRent] = useState(0);
  const nav = useNavigate();
  const form = useRef();
  let dis=useDispatch();
  useEffect(() => {
    // sendEmail().then(res=>console.log(res)).alert(err=>console.log(err))
    nav("/login");

    //מספר דירות פנויותתת
    getNumPropToSaleOrRent(1)
      .then((res) => setSale(res.data[0]["count(*)"]))
      .catch((err) => alert(err));
    getNumPropToSaleOrRent(2)
      .then((res) => setRent(res.data[0]["count(*)"]))
      .catch((err) => alert(err));

  }, []);

  
  return (
    <div className="App">
      <div className="title-div">
        <img id="img-logo" src="image/1.jpeg" />
        <div className="title-div-txt">
          <p id="title2">{rent} להשכרה </p>
          <p id="title">אש נדלן</p>
          <p id="title2">{sale} למכירה</p>
        </div>
      </div>
      {selectUser != null && <Profile />}

      {/* <div id="div-title"><h1 id="title"> אש נדלן</h1><h2 id="title2">89654 הושכרו    3898 נמכרו</h2></div><br/> */}
      <NavBar />

     {/* <Err/> */}
      {/* <FormField/> */}
      {/* index-
     localhost:3000 כאשר אין ניתוב
      תציג את הדירות */}
      <Routes>
        <Route index element={<Property />} />
        <Route path="property" element={<Property />} />
        <Route path="addProp" element={<Form />} />
        <Route path="board" element={<Board />} />
        <Route path="forum" element={<Forum />} />
        <Route path="DetailsProperty/:idProp/:idPropOwner/:update" element={<DetailsProperty/>} />


        <Route path="help" element={<Help />} />
        <Route path="about" element={<About />} />
        <Route path="chat/:id" element={<Chat />} />
        <Route path="answer/:userid" element={<Answer />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="myarea" element={<MyArea />} />
        <Route path="users" element={<Users />} />
        <Route path="exit" element={<Exit />} />

        <Route path="city" element={<City />} />
        <Route path="size" element={<Size />} />
        <Route path="room" element={<Room />} />
        <Route path="price" element={<Price />} />
        <Route path="typeprop" element={<TypeProp />} />

        <Route path="statistic" element={<IndexStatistic />} />
        <Route path="statistic1" element={<Statistic1 />} />
        <Route path="statistic2" element={<Statistic2 />} />
        <Route path="statistic3" element={<Statistic3 />} />
        <Route path="statistic4" element={<Statistic4 />} />

        <Route path="information" element={<Infomation/>}/>
        <Route path="uplaoded" element={<Uplaoded />}/>
        <Route path="Update" element={<Update />}/>

      </Routes>
      {/* <Collage/> */}
    </div>
  );
}

export default App;
