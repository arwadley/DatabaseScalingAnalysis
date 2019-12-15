import React from "react";
import AboveTheLine from "./AboveTheLine.jsx";
import BelowTheLine from "./BelowTheLine.jsx";
import moment from "moment";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantItDate: null
    };
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.goToProductMaker = this.goToProductMaker.bind(this);
    this.dateMaker = this.dateMaker.bind(this);
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

  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.props.currentProduct.productMaker}'s products`
    );
  }

  dateMaker() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    let date = moment()
      .add(4, "days")
      .format("dddd, MMM Do");
    this.setState({
      wantItDate: date
    });
  }

  componentDidMount() {
    this.dateMaker();
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <AboveTheLine
          individualRatings={this.props.individualRatings}
          currentProduct={this.props.currentProduct}
          currentProductRating={this.props.currentProductRating}
          goToProductMaker={this.goToProductMaker}
          flagToShow={this.props.flagToShow}
        />
        <div id="grayLineDividerS"></div>
        <BelowTheLine
          inStock={this.props.inStock}
          currentProduct={this.props.currentProduct}
          reportModal={this.props.reportModal}
          reportModalOpen={this.props.reportModalOpen}
          descriptionCleaner={this.descriptionCleaner}
          wantItDate={this.state.wantItDate}
        />
      </div>
    );
  }
}

export default Description;
