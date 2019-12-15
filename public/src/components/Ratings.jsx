import React from "react";

const Ratings = props => (
  <div id="numberOfRatingsS">
    <a>{props.currentProduct.productNumOfRatings.toLocaleString()} ratings</a>
  </div>
);

export default Ratings;
