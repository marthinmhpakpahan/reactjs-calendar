import React, { Component } from "react";
import FormLogin from "./FormLogin";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.getAuthenticatedName = this.getAuthenticatedName.bind(this);
  }

  handleClose() {
    this.props.handleClose();
  }

  handleLogin() {}

  getAuthenticatedName(name) {
    this.props.getAuthenticatedName(name);
  }

  render() {
    return (
      <div className="popup center">
        <div className="container col-sm-4 col-md-7 col-lg-4 mt-5">
          <div className="card">
            <h3 className="card-header text-center">
              <h4>{this.props.title}</h4>
            </h3>
            <br />
            <div className="card-body">
              <p>
                <FormLogin
                  getAuthenticatedName={this.getAuthenticatedName}
                  handleClose={this.handleClose}
                />
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
