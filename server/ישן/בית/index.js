const cors=require("cors");
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
//ייבוא הראוטרים
const userrouter=require("./Router/userRouter");
const proprouter=require("./Router/propRouter");
const chatrouter=require("./Router/chatRouter");
const statisticRouter=require("./Router/statisticRouter");
const likeRouter=require("./Router/likeRouter");
const imgRouter=require("./Router/imgRouter");

app.use(cors());//מאפשר גישה מאתר לאתר
app.use(bodyparser.json());//מקבל מידע ומחזיר כמחרוזת

const port=8080;

app.listen(port,()=>{console.log("running server")});//תאזין ךפורט

const {mysqlConnection}=require("./sql");//חיבור לדאטה בייס
mysqlConnection.connect((err)=>{
    if(!err)
    console.log("successful")
    else
    console.log("error")
})

//ניתוב שיעביר לראוטר
app.use("/user",userrouter);
app.use("/property",proprouter);
app.use("/chat",chatrouter);
app.use("/statistic",statisticRouter);
app.use("/like",likeRouter);
app.use("/img",imgRouter);