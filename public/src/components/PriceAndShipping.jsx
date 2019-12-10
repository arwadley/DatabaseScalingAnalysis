import React from "react";

const PriceAndShipping = props => {
  return (
    <div>
      <span id="productPriceContainerS">
        <span id="theWordPriceS">Price: </span>
        <span id="productPriceS">${props.currentProduct.productPrice}</span>
      </span>
      <div id="shippingInfoUnderPriceS">
        <div>
          {props.currentProduct.productCategory} orders are delivered for $5.99
          and do not qualify for FREE Delivery. <a>Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default PriceAndShipping;
