import React from "react";
import moment from "moment";

class Minutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderByDateMinutes: null
    };
    this.minuteDateCleaner = this.minuteDateCleaner.bind(this);
    this.orderByDateMinutesFunction = this.orderByDateMinutesFunction.bind(
      this
    );
  }

  minuteDateCleaner(minutes) {
    return `${minutes.slice(3)}`;
  }

  orderByDateMinutesFunction() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    this.setState({
      orderByDateMinutes: this.minuteDateCleaner(
        moment()
          .endOf("hour")
          .fromNow()
      )
    });
    setInterval(
      () =>
        this.setState({
          orderByDateMinutes: this.minuteDateCleaner(
            moment()
              .endOf("hour")
              .fromNow()
          )
        }),
      1000
    );
  }

  componentDidMount() {
    this.orderByDateMinutesFunction();
  }

  render() {
    return <span>{this.state.orderByDateMinutes}</span>;
  }
}

export default Minutes;
