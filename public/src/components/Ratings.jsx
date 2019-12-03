import React from "react";

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="numberOfRatingsS">
        {this.props.currentProduct.productNumOfRatings.toLocaleString()} ratings
      </div>
    );
  }
}

export default Ratings;
