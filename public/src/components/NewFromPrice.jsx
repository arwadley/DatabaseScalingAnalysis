import React from "react";
const NewFromPrice = props => {
  return (
    <div id="newFromS">
      <a>New ({~~(Math.random() * 10) + 1}) from</a>{" "}
      <span id="newFromPriceWordS">${props.currentProduct.productPrice}</span> &
      FREE Shipping on orders over $25.00
    </div>
  );
};

export default NewFromPrice;
