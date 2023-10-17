import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import "../style.css";

const Form = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({});
  
// console.log(values);
       
    const nextStep = (values) => {
      setValues({ ...values, ...values });
      setStep(step + 1);
    };
 
    const prevStep = () => {
      setStep(step - 1);
    };
  
    switch (step) {
      case 1:
        //send to Stepone function --> nextStep
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo prevStep={prevStep} nextStep={nextStep} values={values} />;
      case 3:
        return <StepThree prevStep={prevStep} nextStep={nextStep} values={values} />;
      case 4:
        return <StepFour prevStep={prevStep} nextStep={nextStep} values={values}/>;
      case 5: 
        return <StepFive prevStep={prevStep} values={values}/>
      default:
        return null;
    }
  };
  
  export default Form;