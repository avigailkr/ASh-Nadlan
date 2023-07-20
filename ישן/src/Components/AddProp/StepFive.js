import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";

const StepFive = ({ prevStep, values }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
    };
  
    const handlePrev = (e) => {
      e.preventDefault();
      prevStep();
    };
  
    return (<div className="addProp-main">
        <Steps level={4} />
        
      <form onSubmit={handleSubmit} className="form__step">
      
        <p>First Name: {values.firstName}</p>
        <p>Last Name: {values.lastName}</p>
        <p>Email: {values.email}</p>
        <p>Phone: {values.phone}</p>
        
        <button type="submit" className="form__button">שלח</button>
        <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </form>
      </div>
    );
  };

export default StepFive;