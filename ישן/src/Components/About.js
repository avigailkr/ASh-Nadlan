import { getNumPropToSaleOrRent } from "../Services";

const About=()=>{

    //getNumPropToSaleOrRent(1).then(res=>console.log(res.data[0]["count(*)"])).catch(er=>console.log(er))
    return <>
        <h1>אודות</h1>
        <p>
            אתר זה הוקם למען דרכי תיווך נוחים וידידותיים למשתמש.
            מקווים שתהנו...
        </p>
        <p>כל הזכויות שמורות SA@</p>
        
    </>
    
}
export default About;