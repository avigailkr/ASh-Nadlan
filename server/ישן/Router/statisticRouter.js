const {Router} = require('express');//ייבוא הראוטר ממודול אקספרס
const statisticRouter=new Router();//יצירת מופע ממחלקת הראוטר

const {promiseQuery}=require("../sql")//ייבוא של אובייקט שיודע לשלוח שאילתה


// מס דירות פנויות למכירה או להשכרה
statisticRouter.get("/numPropToSale/:idSale",async (req,res)=>{
        try{
        const idsale=req.params.idSale;
        const query=`select count(*) from nadlan.property p join nadlan.typesale t on p.IdTypeSale=t.Id where t.Id=${idsale} and p.IsSaleOrRent=0`;
        const rows= await promiseQuery(query);
        res.send(rows)
    }
        catch(e){

            console.log(e)
            res.send(e.sqlMessage)
        }
    })


//כמה נתפסו
statisticRouter.get("/propertysUse",async (req,res)=>{
    try{
    const query=`select * FROM nadlan.property where IsSale=1`;
    const rows= await promiseQuery(query);
    console.log(rows.length)
    res.send(rows)}
    catch(e){
        console.log(e)
        res.send(e.sqlMessage)
    }

})


// מקבלים עיר סוג המכירה וטווח שנים ושולחים לכל שנה 
//כמה דירות בעיר זו נמכרו או הושכרו לפי סוג המכירה
statisticRouter.post("/x",async(req,res)=>{
    try{
        const details=req.body;
        const query=`select count(*) from nadlan.property where IdCity=1 and IdTypeSale=1 and IsSaleOrRent=1`

    }
    catch{

    }
})




//מקבלים עיר סוג מכירה טווח שנים וטווח מחירים
// מחזירים כמה דירות נמכרו או הושכרו במחיר זה לכל שנה

module.exports=statisticRouter;