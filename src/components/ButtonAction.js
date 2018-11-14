import React, { Component } from "react";

class ButtonAction extends Component {
  render() {
    var { type, label } = this.props;
    return (
      <button
        className="btn btn-outline-primary col-sm-6"
        onClick={e => this.props.onClick(type)}
      >
        {label}
      </button>
    );
  }
}

export default ButtonAction;
