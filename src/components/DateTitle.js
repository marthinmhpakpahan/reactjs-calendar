import React, { Component } from "react";

class DateTitle extends Component {
  render() {
    let { currentMonthYear } = this.props;
    return <h3 className="card-header">{currentMonthYear}</h3>;
  }
}

export default DateTitle;
