import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    };

    this.selectProduct = this.selectProduct.bind(this);
    // this.reportModal = this.reportModal.bind(this);
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

  // reportModal() {
  //   console.log("modal ran");
  //   this.setState({
  //     reportModalOpen: !this.state.reportModalOpen
  //   });
  // }

  render() {
    return !this.state.currentProduct ? (
      <button onClick={this.selectProduct} value="1">
        Click for products
      </button>
    ) : (
      <Description currentProduct={this.state.currentProduct} />
    );
  }
}

export default App;
