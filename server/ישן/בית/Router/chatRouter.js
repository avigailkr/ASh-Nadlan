const {Router} = require('express');//ייבוא הראוטר ממודול אקספרס
const chatRouter=new Router();//יצירת מופע ממחלקת הראוטר

const {promiseQuery}=require("../sql")//ייבוא של אובייקט שיודע לשלוח שאילתה

//שליפת כל החדרים
// chatRouter.get("/getAllRooms",async (req,res)=>{
//     try{
//     const query=`SELECT * FROM nadlan.room;`;
//     const rows= await promiseQuery(query);
//     res.send(rows);}
//     catch(e){
//         console.log(e)
//         res.send(e.sqlMessage)
//     }

// })

//שליפת הודעות של חדר מסויים לפי 2 משתמשים
chatRouter.get("/getRoom/:id1/:id2",async (req,res)=>{
    try{
    const query=`SELECT * FROM nadlan.room r join nadlan.chat c on c.IdRoom=r.Id WHERE UserId1=${req.params.id1} and UserId2=${req.params.id2} or UserId1=${req.params.id2} and UserId2=${req.params.id1}`;
    const rows= await promiseQuery(query);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})

//מחיקת צאט של חדר מסויים
chatRouter.delete("/deleteMass/:id",async(req,res)=>{
    console.log(id)
    try{const query=`DELETE FROM nadlan.room WHERE Id=${req.params.id} `;
    const result=await promiseQuery(query);
    res.send(result);}
    catch(e){ 
        console.log(e)
        res.send(e.sqlMessage)
    }
    
})



chatRouter.post("/AddMass",async (req,res)=>{ 
    const DetailsMass=req.body;
    console.log(DetailsMass)

    //איך עושים תאריך נוכחייייייייייייייייי
    const query=`INSERT INTO nadlan.chat  VALUES(0,${DetailsMass.idroom},${DetailsMass.iduser},'${DetailsMass.massage}','2000-4-6')`;
    const result=await promiseQuery(query);
    res.send(result);
})



// //שליפת כל הדירות של משתמש מסויים
// chatRouter.get("/getAllChatByRoomId/:id",async (req,res)=>{
//     try{
//     const queryString=`SELECT * FROM nadlan.chat WHERE IdRoom=${req.params.id}`;
//     const rows= await promiseQuery(queryString);
//     res.send(rows);}
//     catch(e){
//         console.log(e)
//         res.send(e.sqlMessage)
// }})
module.exports=chatRouter;