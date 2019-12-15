import React from "react";
import moment from "moment";

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderByDateHours: null
    };
    this.hourDateCleaner = this.hourDateCleaner.bind(this);
    this.orderByDateHoursFunction = this.orderByDateHoursFunction.bind(this);
  }

  orderByDateHoursFunction() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    this.setState({
      orderByDateHours: this.hourDateCleaner(
        moment()
          .endOf("day")
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
          )
        }),
      1000
    );
  }

  hourDateCleaner(hours) {
    return hours.slice(3);
  }

  componentDidMount() {
    this.orderByDateHoursFunction();
  }

  render() {
    return <span>{this.state.orderByDateHours}</span>;
  }
}

export default Hours;
