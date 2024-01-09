import { useEffect, useRef, useState } from "react";
import { getUserByIdFromServer } from "../../Services";
import emailjs from "@emailjs/browser";


const SendEmailSmartA=(props)=>{

    let [email,setemail]=useState(null)
  let [name,setname]=useState(null)
  const form = useRef();
console.log("SendEmailSmartA")
console.log(props)

    useEffect(()=>{
        alert("SendEmailSmartA")
getUserByIdFromServer(1).then(res=>{console.log(res.data)

}).catch(err=>alert(err))

    },[])


    const sendEmail = (iduser) => {
        console.log("sendEmail");
        // let obj={
        //   name:"shili",
        //   email:"shilat.bedani@gmail.com"
        // }
        // emailjs.send('service_dddlq4q', 'template_whu9xw8', obj)
        //     .then(function(response) {
        //        console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //        console.log('FAILED...', error);
        //     });
          emailjs.sendForm('service_dddlq4q', 'template_whu9xw8',form.current, 'h8uvQnkZ5XPOub0E6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
      };

return<>
  <form ref={form} >
     {/* <input type="text" value="shilatoshh" name="user_name"/>
     <input type="text" value="shilat.bedani@gmail.com" name="user_email"/>
     <input type="text" value={values.city} name="city"/>
     <input type="text" value={values.mr} name="mr"/>
     <input type="text" value={values.price} name="price"/>
     <input type="text" value={values.InsertDate} name="InsertDate"/>
     <input type="text" value={values.type} name="type"/>
     <input type="text" value={values.room} name="room"/>
     <input type="text" value={values.isSale} name="isSale"/> */}
     </form>
</>
}
export default SendEmailSmartA;