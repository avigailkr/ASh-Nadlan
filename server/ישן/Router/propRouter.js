const {Router} = require('express');//ייבוא הראוטר ממודול אקספרס
const propRouter=new Router();//יצירת מופע ממחלקת הראוטר

const {promiseQuery}=require("../sql")//ייבוא של אובייקט שיודע לשלוח שאילתה

//שליפת כל הדירות
propRouter.get("/getAllPropertys",async (req,res)=>{
    try{
    const query=`SELECT * FROM nadlan.property`;
    const rows= await promiseQuery(query);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})
//שליפת כל הדירות של משתמש מסויים
propRouter.get("/getAllApartmentsByUserId/:id",async (req,res)=>{
    try{
    const queryString=`SELECT * FROM  nadlan.property WHERE IdUser=${req.params.id}`;
    const rows= await promiseQuery(queryString);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
}})

propRouter.get("/getOwner/:id",async (req,res)=>{
    try{
    const query=`SELECT * FROM nadlan.user WHERE Id=${req.params.id}`;
    const rows= await promiseQuery(query);
    res.send(rows);}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
}})
propRouter.delete("/deleteProp/:id",async(req,res)=>{
    const id=req.params.id;
    const query=`DELETE FROM nadlan.property WHERE Id=${id}`;
    const result=await promiseQuery(query);
    res.send(result);
})
// // INSERT INTO `tasks`.`tasks` (`desc`, `date`, `rank`, `complete`, `userId`) VALUES ('ספורט', '2013-12-14 00:00:00', '1', b'0', b'1');
// propRouter.post("/addTask",async (req,res)=>{
    
//     const task=req.body;
//     console.log(task)
//     //const query=`INSERT INTO tasks VALUES(0,'${task.desc}',${task.date},${task.rank},0,${task.userId})`;
//     const query=`INSERT INTO tasks.tasks VALUES (0,'${task.desc}','${task.date}',${task.rank},${task.complete},${task.userId})`;
//     const query2=`SELECT id FROM tasks.tasks WHERE tasks.desc='${task.desc}'`

//     const result=await promiseQuery(query);
//     const result2=await promiseQuery(query2);
//     res.send(result2);
// });


// propRouter.put("/updateTask/:id",async (req,res)=>{
//     const id=req.params.id;
//     const task=req.body;
//     const query=`UPDATE tasks SET
//                  id='${task.id}',
//                  desc='${task.desc}',
//                  date=${task.date},
//                  rank=${task.rank},
//                  complete=${task.complete},
//                  userId=${task.userId}
//     `;
//     const result=await promiseQuery(query);
//     res.send(result);
// })
// aparRouter.delete("/deleteTask/:id",async(req,res)=>{
//     const id=req.params.id;
//     const query=`DELETE FROM tasks
//     WHERE id=${id}`;
//     const result=await promiseQuery(query);
//     res.send(result);
// })
 module.exports=propRouter;//ייצוא המופע
