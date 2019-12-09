import React from "react";

const InStock = props => {
  return props.inStock ? (
    <div id="itemInStockS">In Stock.</div>
  ) : (
    <div id="itemNotInStockS">Out of Stock.</div>
  );
};

export default InStock;
