import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      currentProductRating: null,
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

  selectProductFromField(event) {
    axios({
      method: "GET",
      url: `http://node-express-env.pd2fd7phmh.us-east-2.elasticbeanstalk.com/api/${event}`
    }).then(data => {
      console.log(data);
      this.setState({
        currentProduct: data.data[0]
      });
    });
  }

  getRatingFromInput(event) {
    axios({
      method: "GET",
      url: `http://gammazonreviews.us-east-2.elasticbeanstalk.com/comments/${event}`
    }).then(data =>
      this.setState({
        currentProductRating: data.data[0].average,
        individualRatings: data.data[0].individualRatings
      })
    );
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
    let idText = window.location.search;
    let croppedID = idText.substring(idText.indexOf("=") + 1);
    croppedID = +croppedID;
    this.getRatingFromInput(croppedID);
    this.selectProductFromField(croppedID);
    this.availableOrNot();
    this.dealGetter();
  }

  defaultGet() {
    this.getRatingFromInput(1);
    this.selectProductFromField(1);
    this.availableOrNot();
    this.dealGetter();
  }

  componentDidMount() {
    window.location.search ? this.getId() : this.defaultGet();
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
