import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";


const StepFour = ({ prevStep, nextStep, values }) => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep({ ...values, email });
  };

  return (<div className="addProp-main">
    <Steps level={3}/>

    <form onSubmit={handleNext} className="form__step">
      <label>
        סוג הדירה
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      
      <button type="submit" className="form__button">הבא</button>
      <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
    </form>
    </div>
  );
};
export default StepFour;