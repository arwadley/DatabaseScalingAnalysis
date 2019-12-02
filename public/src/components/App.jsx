import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
const axios = require("axios");
const fetch = require("node-fetch");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    };
  }

  // componentDidMount() {
  //   axios.get("/").then(console.log);
  // }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductS">
          <h1>TITLE</h1>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker currentProduct={this.state.currentProduct} />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars currentProduct={this.state.currentProduct} />
          <Ratings currentProduct={this.state.currentProduct} />
          <QuestionsAnswered currentProduct={this.state.currentProduct} />
        </span>
        <div id="productPriceS">$5,000,000.99</div>
        <div id="productDescriptionTextS">
          <p>this is the product description</p>
        </div>
      </div>
    );
  }
}

export default App;
