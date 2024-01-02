import React from "react";
import astronot from "../img/astronot.png"

const Error = () => {
  return (
    <div className="error">
      <div className="background">
        <p>Your credit card payment was rejected by your bank. Please try again and contact your bank for assistance. ✖️</p>
        <img src={astronot} alt="astronot" />
      </div>
    </div>
  );
};

export default Error;
