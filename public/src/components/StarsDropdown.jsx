import React from "react";
import Rating from "@material-ui/lab/Rating";

const StarsDropDown = props => (
  <div>
    {props.dropDownDisplayed ? (
      <div id="starDropDownContainerS" onMouseLeave={props.hoverGoBack}>
        <div id="innerStarDropdownContainerS">
          <div id="starsInsideDropdownS">
            <Rating
              name="numOfStarsS"
              value={props.star1 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star2 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star3 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star4 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star5 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <div id="ratingInsideDropdownS">
              {props.currentProduct.productRating} out of 5
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default StarsDropDown;
