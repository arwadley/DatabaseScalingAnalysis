import React from "react";

const CompareSimilar = props => {
  return (
    <div id="compareContainerS">
      <a>
        Compare with similar items in {props.currentProduct.productCategory}
      </a>
    </div>
  );
};

export default CompareSimilar;
