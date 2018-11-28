import React, { Component } from "react";

class DateTitle extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    let { currentMonthYear } = this.props;
    return (
      <div className="form-inline card-header">
        <h3 style={{ width: "60%" }}>{currentMonthYear}</h3>
        <div className="text-right" style={{ width: "40%" }}>
          <span>
            <b>{this.props.name}</b>
          </span>{" "}
          &nbsp;&nbsp;
          <a onClick={this.handleClick}>{this.props.buttonLabel}</a>
        </div>
      </div>
    );
  }
}

export default DateTitle;
