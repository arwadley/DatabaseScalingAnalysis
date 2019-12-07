import React from "react";

const DealDropdown = props => {
  return (
    <div id="outerDealDropdownBoxS">
      <ul>
        <li id="buy5Save5S">Buy 5, save 5%.</li>
      </ul>
      <div id="dealTextContainerS">
        Save up to 15% in {props.currentProduct.productCategory}. Buy any 5{" "}
        {props.currentProduct.productCategory} items to save 5% on your order.
        Buy any 10, save 10%. Buy 15 or more and save 15% on your entire{" "}
        {props.currentProduct.productCategory} order. Discount applied at
        checkout. Shop all Pantry at www.gammazon.com/
        {props.currentProduct.productCategory}. Offered by{" "}
        {props.currentProduct.productCategory}.{" "}
        <a onClick={props.openLearnMoreModal}>Here's how </a>
        (restrictions apply)
      </div>
    </div>
  );
};

export default DealDropdown;
