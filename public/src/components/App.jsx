import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
import InStock from "./InStock.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    };
    this.goToProductMaker = this.goToProductMaker.bind(this);
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    // this.getAllProducts = this.getAllProducts.bind(this);
  }

  descriptionCleaner(desc) {
    let cleanedDesc = "";
    let cleanLines = [];
    let curChar = 0;
    for (let i = 0; i < desc.length; i++) {
      if (desc[i] === "+" && desc[i + 1] === "+") {
        cleanedDesc = desc.slice(curChar, i) + "\n";
        cleanLines.push(cleanedDesc);
        cleanedDesc = "";
        curChar = i + 2;
      }
      if (i === desc.length - 1) {
        cleanedDesc = desc.slice(curChar, i + 1);
        cleanLines.push(cleanedDesc);
      }
    }
    return cleanLines;
  }

  selectProduct(event) {
    axios({
      method: "GET",
      url: `/${event.target.value}`
    }).then(data =>
      this.setState({
        currentProduct: data.data[0]
      })
    );
  }

  // componentDidMount() {
  //   this.inStockOrNot();
  // }

  // getAllProducts() {
  //   console.log("get all ran");
  //   axios({
  //     method: "GET",
  //     url: "/allProducts"
  //   })
  //     .then(data => data.data)
  //     .then(data => data.map(product => [product.id, product.productName]))
  //     .then(console.log);
  // }
  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.state.currentProduct.productMaker}'s products`
    );
  }

  render() {
    return !this.state.currentProduct ? (
      <button onClick={this.selectProduct} value="5">
        Click for products
      </button>
    ) : (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductContainerS">
          <div id="titleOfProductS">
            {this.state.currentProduct.productName}
          </div>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker
            currentProduct={this.state.currentProduct}
            goToProductMaker={this.goToProductMaker}
          />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars currentProduct={this.state.currentProduct} />
          <Ratings currentProduct={this.state.currentProduct} />
          <QuestionsAnswered currentProduct={this.state.currentProduct} />
        </span>
        <span id="productPriceContainerS">
          <span id="theWordPriceS">Price: </span>
          <span id="productPriceS">
            ${this.state.currentProduct.productPrice}
          </span>
        </span>
        <div id="grayLineDividerS"></div>
        <InStock />
        <div id="productDescriptionLineContainerS">
          <ul>
            {this.descriptionCleaner(this.state.currentProduct.productDesc).map(
              (line, id) => (
                <li key={id} className="productDescriptionLineS">
                  {line}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
