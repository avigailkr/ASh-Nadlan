const {Router} = require('express');//ייבוא הראוטר ממודול אקספרס
const imgRouter=new Router();//יצירת מופע ממחלקת הראוטר

const {promiseQuery}=require("../sql")//ייבוא של אובייקט שיודע לשלוח שאילתה

//שליפת כל החדרים
imgRouter.get("/getAllImg",async (req,res)=>{
    try{
    const query=`SELECT * FROM nadlan.img;`;
    const rows= await promiseQuery(query);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})
//שליפת כל הדירות של משתמש מסויים
imgRouter.get("/getAllImgByPropId/:id",async (req,res)=>{
    try{
    const queryString=`SELECT * FROM nadlan.img WHERE IdProp=${req.params.id}`;
    const rows= await promiseQuery(queryString);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
}})
module.exports=imgRouter;