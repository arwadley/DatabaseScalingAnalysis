import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
import PriceAndShipping from "./PriceAndShipping.jsx";
import FlagAndDeals from "./FlagAndDeals.jsx";

const AboveTheLine = props => {
  return (
    <div>
      <div id="titleOfProductContainerS">
        <div id="titleOfProductS">{props.currentProduct.productName}</div>
      </div>
      <div id="productMakerContainerS">
        <ProductMaker
          currentProduct={props.currentProduct}
          goToProductMaker={props.goToProductMaker}
        />
      </div>
      <span id="starsRatingsQuestionsContainerS">
        <Stars currentProduct={props.currentProduct} />
        <Ratings currentProduct={props.currentProduct} />
        <span id="theLineS">|</span>
        <QuestionsAnswered currentProduct={props.currentProduct} />
      </span>
      <PriceAndShipping currentProduct={props.currentProduct} />
      <FlagAndDeals currentProduct={props.currentProduct} />
    </div>
  );
};

export default AboveTheLine;
