import "../style.css";
import Steps from "./Steps";
import { useState } from "react";
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai"

const StepThree = ({prevStep, nextStep, values }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("לא נבחרו תמונות");

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
      <label>
       העלאת תמונות        
      </label>

      <div id="DivfileInput" onClick={()=>document.querySelector('.input-file').click()}>
      <input type="file" accept="image/*" className="input-file"  hidden 
      onChange={({target:{files}})=>{
        files[0]&& setFileName(files[0].name)
        if(files){
          setImage(URL.createObjectURL(files[0]))
        }
      }}/>
      
       {image ?
       <img src={image} width={200} height={250} alt={fileName}/>
       :
       <>
       <MdCloudUpload color="#1475fc" size={60}/>
       <p>להעלאת תמונות של הנכס</p>
       </>}
      </div>
      <section className="uploded-row">
        <AiFillFileImage color="#1475fc"/>
        <span className="uploud-content">
          {fileName}-
          <MdDelete onClick={()=>{setFileName("לא נבחרו תמונות"); setImage(null)}}/>
        </span>
      </section>
      
      <button type="submit" className="form__button">הבא</button>
      <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
    </form>
    </div>
  );
};
  export default StepThree;