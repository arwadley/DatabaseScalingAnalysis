import React from "react";
import StarsDropdown from "./StarsDropdown.jsx";
import Rating from "@material-ui/lab/Rating";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownDisplayed: false,
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false
    };
    this.hoverDropDown = this.hoverDropDown.bind(this);
    this.hoverGoBack = this.hoverGoBack.bind(this);
    this.starClean = this.starClean.bind(this);
  }

  hoverDropDown() {
    this.setState({
      dropDownDisplayed: true
    });
  }

  hoverGoBack() {
    setTimeout(
      () =>
        this.setState({
          dropDownDisplayed: false
        }),
      800
    );
  }

  starClean() {
    if (this.props.currentProduct.productRating >= 1) {
      this.setState({
        star1: true
      });
    }
    if (this.props.currentProduct.productRating >= 2) {
      this.setState({
        star2: true
      });
    }
    if (this.props.currentProduct.productRating >= 3) {
      this.setState({
        star3: true
      });
    }
    if (this.props.currentProduct.productRating >= 4) {
      this.setState({
        star4: true
      });
    }
    if (this.props.currentProduct.productRating === 5) {
      this.setState({
        star5: true
      });
    }
  }

  componentDidMount() {
    this.starClean();
  }

  render() {
    return (
      <div>
        <div id="starsContainerS" onMouseEnter={this.hoverDropDown}>
          <Rating
            name="numOfStarsS"
            value={this.state.star1 ? 1 : 0}
            readOnly={true}
            precision={1}
            max={1}
            size="small"
          />
          <Rating
            name="numOfStarsS"
            value={this.state.star2 ? 1 : 0}
            readOnly={true}
            precision={1}
            max={1}
            size="small"
          />
          <Rating
            name="numOfStarsS"
            value={this.state.star3 ? 1 : 0}
            readOnly={true}
            precision={1}
            max={1}
            size="small"
          />
          <Rating
            name="numOfStarsS"
            value={this.state.star4 ? 1 : 0}
            readOnly={true}
            precision={1}
            max={1}
            size="small"
          />
          <Rating
            name="numOfStarsS"
            value={this.state.star5 ? 1 : 0}
            readOnly={true}
            precision={1}
            max={1}
            size="small"
          />
        </div>
        <div>
          <StarsDropdown
            currentProduct={this.props.currentProduct}
            star1={this.state.star1}
            star2={this.state.star2}
            star3={this.state.star3}
            star4={this.state.star4}
            star5={this.state.star5}
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
