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
      star5: false,
      bar1: null,
      bar2: null,
      bar3: null,
      bar4: null,
      bar5: null
    };
    this.hoverDropDown = this.hoverDropDown.bind(this);
    this.hoverGoBack = this.hoverGoBack.bind(this);
    this.starClean = this.starClean.bind(this);
    this.barGenerator = this.barGenerator.bind(this);
  }

  barGenerator() {
    setTimeout(() => {
      let bar1Value = this.props.individualRatings[0]
        ? (this.props.individualRatings[0].oneStarRatings / 30) * 100
        : null;
      let bar2Value = this.props.individualRatings[1]
        ? (this.props.individualRatings[1].twoStarRatings / 30) * 100
        : null;
      let bar3Value = this.props.individualRatings[2]
        ? (this.props.individualRatings[2].threeStarRatings / 30) * 100
        : null;
      let bar4Value = this.props.individualRatings[3]
        ? (this.props.individualRatings[3].fourStarRatings / 30) * 100
        : null;
      let bar5Value = this.props.individualRatings[4]
        ? (this.props.individualRatings[4].fiveStarRatings / 30) * 100
        : null;
      this.setState({
        bar1: bar1Value,
        bar2: bar2Value,
        bar3: bar3Value,
        bar4: bar4Value,
        bar5: bar5Value
      });
    }, 500);
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
    setTimeout(() => {
      if (this.props.currentProductRating >= 1) {
        this.setState({
          star1: true
        });
      }
      if (this.props.currentProductRating >= 2) {
        this.setState({
          star2: true
        });
      }
      if (this.props.currentProductRating >= 3) {
        this.setState({
          star3: true
        });
      }
      if (this.props.currentProductRating >= 4) {
        this.setState({
          star4: true
        });
      }
      if (this.props.currentProductRating === 5) {
        this.setState({
          star5: true
        });
      }
    }, 500);
  }

  componentDidMount() {
    this.starClean();
    this.barGenerator();
  }

  render() {
    return (
      <div>
        {this.props.currentProductRating ? (
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
        ) : null}
        <div>
          <StarsDropdown
            currentProduct={this.props.currentProduct}
            star1={this.state.star1}
            star2={this.state.star2}
            star3={this.state.star3}
            star4={this.state.star4}
            star5={this.state.star5}
            bar1={this.state.bar1}
            bar2={this.state.bar2}
            bar3={this.state.bar3}
            bar4={this.state.bar4}
            bar5={this.state.bar5}
            hoverDropDown={this.hoverDropDown}
            hoverGoBack={this.hoverGoBack}
            dropDownDisplayed={this.state.dropDownDisplayed}
            currentProductRating={this.props.currentProductRating}
            individualRatings={this.props.individualRatings}
            productNumOfRatings={this.props.currentProduct.productNumOfRatings}
          />
        </div>
      </div>
    );
  }
}

export default Stars;
