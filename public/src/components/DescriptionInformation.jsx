import React from "react";

const DescriptionInformation = props => {
  return (
    <div id="productDescriptionLineContainerS">
      <ul>
        {props
          .descriptionCleaner(props.currentProduct.productDesc)
          .map((line, id) => (
            <li key={id} className="productDescriptionLineS">
              {line}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DescriptionInformation;
