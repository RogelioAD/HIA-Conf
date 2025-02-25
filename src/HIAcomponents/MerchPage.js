import React from "react";
import "../styles/MerchPage.css";
function MerchPage(){

  return (
    <div className="merchPage">
      <div className="bigFont">
        COME BACK SOON
      </div>
      <div>
        <img src={require("../images/basketball.png")} alt="Basketball" />
      </div>
    </div>
  )
}

export default MerchPage;
