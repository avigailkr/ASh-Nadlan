import "../style.css";
import Steps from "./Steps";
import { useState } from "react";
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai"

const StepThree = ({prevStep, nextStep, values }) => {
  const [image, setImage] = useState([]);
  const [fileName, setFileName] = useState("");



  // onChange={({target:{files}})=>{
  //   files[0]&& setFileName(fileName+", "+files[0].name)
  //    if(files){
  //      setImage([...image, URL.createObjectURL(files[0])]);
  //  }




  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep({ ...values, image, fileName });
  };

  return (<div className="addProp-main">
     <Steps level={2}/>

    <form onSubmit={handleNext} className="form__step">
      <label id="up">
       העלאת תמונות        
      </label>

      {/* {Object.keys(subjects).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
    </li>
))} */}

      <div id="DivfileInput" onClick={()=>document.querySelector('.input-file').click()}>
      <input type="file" accept="image/*" className="input-file" multiple hidden 
      onChange={({target:{files}})=>{
       
        Object.keys(files).map((keyName)=>{
          keyName && setFileName(fileName+", "+files[keyName].name)
          if(files){
          setImage([...image, URL.createObjectURL(files[keyName])]);
          console.log(files)
          //יש לי מערך ואני מנסה להוסיף אליו בלולאה כמה אובייקטים של תמונה והוא 
          //מוסיף רק את האובייקט האחרון כשאני בוחרת מס אובייקטים ולא מצליח להוסיף את כולם יחד
       } 
      })
    }
     }/>
   
       {image.length!=0 ?
       <div id="div-upImgs">
       {image.length<9?
       image.map((img)=>{return <div className="div-upImg">
        <img src={img} width={120} height={135} alt={img.name}/>
        </div>
       })
       :
        alert("אפשר להעלות עד 9 תמונות לדירה!")
        }
      </div>
       :
       <>
       <MdCloudUpload color="#1475fc" size={60}/>
       <p>להעלאת תמונות של הנכס</p>
       </>}
      </div>
      <section className="uploded-row">
        <AiFillFileImage color="#1475fc"/>
        <span className="uploud-content">
          {fileName} 
          <MdDelete onClick={()=>{setFileName(""); setImage([])}}/>
        </span>
      </section>
      
      <div className="div-but">
      <button type="submit" className="form__button">הבא</button>
      <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </div>
    </form>
    </div>
  );
};
  export default StepThree;