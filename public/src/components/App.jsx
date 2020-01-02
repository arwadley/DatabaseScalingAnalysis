import React from "react";
import Description from "./Description.jsx";
import { isUndefined } from "util";
import { KeyObject } from "crypto";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      currentProductRating: 5.0,
      individualRatings: null,
      inStock: null,
      flagToShow: null
    };
    this.getId = this.getId.bind(this);
    this.defaultGet = this.defaultGet.bind(this);
    this.selectProductFromField = this.selectProductFromField.bind(this);
    this.getRatingFromInput = this.getRatingFromInput.bind(this);
    this.availableOrNot = this.availableOrNot.bind(this);
    this.dealGetter = this.dealGetter.bind(this);
  }

  selectProductFromField(id) {
    axios.get("/itemIdPG", { params: { id: id } }).then(data => {
      let obj = data.data;
      for (var key in data.data) {
        if (key === "productname") {
          obj.productName = data.data.productname;
        } else if (key === "productmaker") {
          obj.productMaker = data.data.productmaker;
        } else if (key === "productdesc") {
          obj.productDesc = data.data.productdesc;
        } else if (key === "productprice") {
          obj.productPrice = data.data.productprice;
        } else if (key === "productrating") {
          obj.productRating = data.data.productRating;
        } else if (key === "productnumofratings") {
          obj.productNumOfRatings = data.data.productnumofratings;
        } else if (key === "productnumofquestionsanswered") {
          obj.productNumOfQuestionsAnswered =
            data.data.productnumofquestionsanswered;
        } else if (key === "productcategory") {
          obj.productCategory = data.data.productcategory;
        }
      }
      console.log(obj);
      this.setState({
        currentProduct: obj
      });
    });
  }

  getRatingFromInput(event) {
    // axios({
    //   method: "GET",
    //   url: `http://gammazonreviews.us-east-2.elasticbeanstalk.com/comments/${event}`
    // }).then(data =>
    //   this.setState({
    //     currentProductRating: data.data[0].average,
    //     individualRatings: data.data[0].individualRatings
    //   })
    // );
  }

  availableOrNot() {
    console.log("run");
    let stock = [true, true, true, true, true, false];
    this.setState({
      inStock: stock[~~(Math.random() * stock.length)]
    });
  }

  dealGetter() {
    let deals = [true, false];
    let flagChooser = deals[~~(Math.random() * deals.length)];
    this.setState({
      flagToShow: flagChooser
    });
  }

  getId() {
    // let idText = window.location.search;
    // let croppedID = idText.substring(idText.indexOf("=") + 1);
    // croppedID = +croppedID;
    // this.getRatingFromInput(croppedID);
    // this.selectProductFromField(croppedID);
    // this.availableOrNot();
    // this.dealGetter();
  }

  defaultGet() {
    // this.getRatingFromInput(1);
    this.selectProductFromField(800);
    this.availableOrNot();
    this.dealGetter();
  }

  componentDidMount() {
    // window.location.search ? this.getId() : this.defaultGet();
    this.defaultGet();
  }

  render() {
    return this.state.currentProduct ? (
      <div>
        <Description
          flagToShow={this.state.flagToShow}
          availableOrNot={this.availableOrNot}
          inStock={this.state.inStock}
          currentProduct={this.state.currentProduct}
          currentProductRating={this.state.currentProductRating}
          individualRatings={this.state.individualRatings}
        />
      </div>
    ) : null;
  }
}

export default App;
