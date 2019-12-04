import React from "react";
import StarsDropdown from "./StarsDropdown.jsx";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownDisplayed: false
    };
    this.hoverDropDown = this.hoverDropDown.bind(this);
    this.hoverGoBack = this.hoverGoBack.bind(this);
  }

  hoverDropDown() {
    this.setState({
      dropDownDisplayed: true
    });
  }

  hoverGoBack() {
    this.setState({
      dropDownDisplayed: false
    });
  }

  render() {
    return (
      <div id="starsContainerS">
        <div onMouseEnter={this.hoverDropDown} onMouseLeave={this.hoverGoBack}>
          {this.props.currentProduct.productRating}/5
        </div>
        <div>
          <StarsDropdown
            hoverDropDown={this.hoverDropDown}
            hoverGoBack={this.hoverGoBack}
            dropDownDisplayed={this.state.dropDownDisplayed}
            productRating={this.props.currentProduct.productRating}
            productNumOfRatings={this.props.currentProduct.productNumOfRatings}
          />
        </div>
      </div>
    );
  }
}

export default Stars;
