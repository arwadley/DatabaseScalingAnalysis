import React from "react";
import AboveTheLine from "./AboveTheLine.jsx";
import BelowTheLine from "./BelowTheLine.jsx";

import moment from "moment";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: null,
      wantItDate: null,
      orderByDateHours: null,
      orderByDateMinutes: null,
      orderByDateSeconds: null
    };
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.goToProductMaker = this.goToProductMaker.bind(this);
    this.dateMaker = this.dateMaker.bind(this);
    this.orderByDate = this.orderByDate.bind(this);
    this.hourDateCleaner = this.hourDateCleaner.bind(this);
    this.minuteDateCleaner = this.minuteDateCleaner.bind(this);
    this.availableOrNot = this.availableOrNot.bind(this);
    this.secondDateCleaner = this.secondDateCleaner.bind(this);
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

  orderByDate() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    this.setState({
      orderByDateHours: this.hourDateCleaner(
        moment()
          .endOf("day")
          .fromNow()
      ),
      orderByDateMinutes: this.minuteDateCleaner(
        moment()
          .endOf("hour")
          .fromNow()
      ),
      orderByDateSeconds: this.secondDateCleaner(
        moment()
          .endOf("minutes")
          .fromNow()
      )
    });

    setInterval(
      () =>
        this.setState({
          orderByDateHours: this.hourDateCleaner(
            moment()
              .endOf("day")
              .fromNow()
          ),
          orderByDateMinutes: this.minuteDateCleaner(
            moment()
              .endOf("hour")
              .fromNow()
          ),
          orderByDateSeconds: this.secondDateCleaner(
            moment()
              .endOf("minutes")
              .fromNow()
          )
        }),
      1000
    );
  }

  hourDateCleaner(hours) {
    return hours.slice(3);
  }

  minuteDateCleaner(minutes) {
    return `${minutes.slice(3)}`;
  }

  secondDateCleaner(seconds) {
    let array = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44
    ];
    return array.indexOf(+seconds.slice(3, 5)) > -1 &&
      array.indexOf(+seconds.slice(3, 4)) > -1
      ? `and ${seconds.slice(3)}.`
      : null;
  }

  availableOrNot() {
    let stock = [true, true, true, true, true, true, false];
    let picker = stock[~~(Math.random() * stock.length)];
    this.setState({
      inStock: picker
    });
  }
  componentDidMount() {
    this.dateMaker();
    this.orderByDate();
    this.availableOrNot();
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <AboveTheLine
          currentProduct={this.props.currentProduct}
          goToProductMaker={this.goToProductMaker}
        />
        <div id="grayLineDividerS"></div>
        <BelowTheLine
          inStock={this.state.inStock}
          currentProduct={this.props.currentProduct}
          reportModal={this.props.reportModal}
          reportModalOpen={this.props.reportModalOpen}
          descriptionCleaner={this.descriptionCleaner}
          wantItDate={this.state.wantItDate}
          orderByDateHours={this.state.orderByDateHours}
          orderByDateMinutes={this.state.orderByDateMinutes}
          orderByDateSeconds={this.state.orderByDateSeconds}
        />
      </div>
    );
  }
}

export default Description;
