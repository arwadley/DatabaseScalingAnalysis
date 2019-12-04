import React from "react";

class InStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: ""
    };
  }

  componentDidMount() {
    let stock = [true, true, true, true, true, true, false];

    let picker = stock[~~(Math.random() * stock.length)];
    console.log(picker);
    this.setState({
      inStock: picker
    });
  }

  render() {
    return this.state.inStock ? (
      <div id="itemInStockS">In Stock.</div>
    ) : (
      <div id="itemNotInStockS">Out of Stock.</div>
    );
  }
}

export default InStock;
