import React from "react";

class InStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: null
    };
  }

  componentDidMount() {
    let stock = [true, true, true, true, true, true, false];
    let picker = stock[~~(Math.random() * stock.length)];
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
