import "../style.css";
import Steps from "./Steps";
import { useState } from "react";
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai"

const StepThree = ({prevStep, nextStep, values }) => {
  const [image, setImage] = useState([]);

  console.log(image)

const onFileChange = (files) => {
    setImage(f => [...f, ...files]);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();

    
    nextStep({ ...values, image });
  };

  

  return (<div className="addProp-main">
<<<<<<< HEAD
   

    <form onSubmit={handleNext} className="form__step">
        <Steps level={2}/>

        <div className="up">
      <label >
=======
     <Steps level={2}/>

    <form onSubmit={handleNext} className="form__step">
      <label id="up">
>>>>>>> 973775d (17.10.23 a)
       העלאת תמונות        
      </label>

      <div id="DivfileInput" onClick={()=>document.querySelector('.input-file').click()}>

      <input type="file" accept="image/*" className="input-file" multiple={true} hidden 
      onChange={(e)=>{onFileChange(e.target.files)}}/>

   
       {image.length!=0 ?
       <div id="div-upImgs">
       {
       image.map((img)=>{return <div className="div-upImg">
        <img src={URL.createObjectURL(img)} width={150} height={135} alt={img.name}/>
        </div>
       })
<<<<<<< HEAD
=======
      //  :
      //   alert("אפשר להעלות עד 8 תמונות לדירה!")&&
      //   image.map((img)=>{return <div className="div-upImg">
      //   <img src={URL.createObjectURL(img)} width={150} height={135} alt={img.name}/>
      //   </div>
      //  })
>>>>>>> 973775d (17.10.23 a)
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
          {image.length} מספר התמונות העתידות לעלות לאתר הוא
          <MdDelete onClick={()=>{setImage([])}}/>
        </span>
      </section>
<<<<<<< HEAD
    </div>

=======
      
>>>>>>> 973775d (17.10.23 a)
      <div className="div-but">
      <button type="submit" className="form__button">הבא</button>
      <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 973775d (17.10.23 a)
    </form>
    </div>
  );
};
  export default StepThree;