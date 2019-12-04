import React from "react";

const StarsDropDown = props => (
  <div>
    {props.dropDownDisplayed ? (
      <div id="starDropDownContainerS">
        {props.productRating}/5 --> this is the star box!
      </div>
    ) : null}
  </div>
);

export default StarsDropDown;
