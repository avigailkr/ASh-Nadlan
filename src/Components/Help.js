import { useEffect } from "react";
import { getAllLikeByIdFromServer } from "../Services";

const Help=()=>{  
    
  useEffect(()=>{getAllLikeByIdFromServer(2).then(res=>console.log(res.data))})
    
    return <>
        <h1>לעזרה</h1>
        <p>
            פנה למנהל האתר במייל
        </p>
        
        <p>
        shila.juhhb@gmail.com
        </p>
        <p>
        או בטלפון
        </p>
        <p>
        07-3456383
        </p>
        <p>כל הזכויות שמורות SA@</p>
        
    </>
    
}
export default Help;