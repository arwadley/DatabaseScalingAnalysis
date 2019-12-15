import React from "react";
import moment from "moment";

class Seconds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderByDateSeconds: null
    };
    this.secondDateCleaner = this.secondDateCleaner.bind(this);
    this.orderByDateSecondsFunction = this.orderByDateSecondsFunction.bind(
      this
    );
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

  orderByDateSecondsFunction() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    this.setState({
      orderByDateSeconds: this.secondDateCleaner(
        moment()
          .endOf("minutes")
          .fromNow()
      )
    });

    setInterval(
      () =>
        this.setState({
          orderByDateSeconds: this.secondDateCleaner(
            moment()
              .endOf("minutes")
              .fromNow()
          )
        }),
      1000
    );
  }

  componentDidMount() {
    this.orderByDateSecondsFunction();
  }
  render() {
    return <span>{this.state.orderByDateSeconds}</span>;
  }
}

export default Seconds;
