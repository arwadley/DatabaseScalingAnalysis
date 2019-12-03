import React from "react";
import StarsDropdown from "./StarsDropdown.jsx";

const Stars = props => {
  return (
    <div>
      <div onMouseEnter={props.hoverDropDown} onMouseLeave={props.hoverGoBack}>
        {props.currentProduct.productRating}/5
      </div>
      <div>
        <StarsDropdown
          hoverDropDown={props.hoverDropDown}
          hoverGoBack={props.hoverGoBack}
          dropDownDisplayed={props.dropDownDisplayed}
          productRating={props.currentProduct.productRating}
          productNumOfRatings={props.currentProduct.productNumOfRatings}
        />
      </div>
    </div>
  );
};
export default Stars;
