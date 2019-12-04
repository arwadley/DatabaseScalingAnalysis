import React from "react";

const ProductMaker = props => {
  return (
    <div>
      <span id="theWordByS">
        by{" "}
        <a id="productMakerS" onClick={props.goToProductMaker}>
          {props.currentProduct.productMaker}
        </a>
      </span>
    </div>
  );
};

export default ProductMaker;
