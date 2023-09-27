const {Router} = require('express');//ייבוא הראוטר ממודול אקספרס
const statisticRouter=new Router();//יצירת מופע ממחלקת הראוטר

const {promiseQuery}=require("../sql")//ייבוא של אובייקט שיודע לשלוח שאילתה


// דירות למכירה 
//שולף את כל הדירות למכירה ושולחן לריאכט
statisticRouter.get("/propertysToSale",async (req,res)=>{
        try{
        const query=`select * FROM nadlan.apartment where IdRentOrSale=2`;
        const rows= await promiseQuery(query);
        console.log(rows.length)
        res.send(rows)}
        catch(e){
            console.log(e)
            res.send(e.sqlMessage)
        }
    
    })
//כמה דירות להשכרה
statisticRouter.get("/propertysToRent",async (req,res)=>{
    try{
    const query=`select * FROM nadlan.apartment where IdRentOrSale=1`;
    const rows= await promiseQuery(query);
    console.log(rows.length)
    res.send(rows)}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})
//כמה נתפסו
statisticRouter.get("/propertysUse",async (req,res)=>{
    try{
    const query=`select * FROM nadlan.apartment where IsSale=1`;
    const rows= await promiseQuery(query);
    console.log(rows.length)
    res.send(rows)}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})

//סנן לפי //statisticRouter.get("/propertysUse",async (req,res)=>{
    statisticRouter.get("/serchBy",async (req,res)=>{
        try{
            const action=req;
            switch(action){
                case "city":
                
            }
        const query=`select * FROM nadlan.apartment where IsSale=1`;
        const rows= await promiseQuery(query);
        console.log(rows.length)
        res.send(rows)}
        catch(e){
            console.log(e)
            res.send(e.sqlMessage)
        }
    
    })
// עיר

//גודל
//מס חדרים
//מחיר
//סוג



module.exports=statisticRouter;