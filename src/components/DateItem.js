import React, { Component } from "react";

class DateItem extends Component {
  render() {
    let { item } = this.props;
    return <td>{item}</td>;
  }
}

export default DateItem;
