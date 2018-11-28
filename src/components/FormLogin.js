import React, { Component } from "react";
import axios from "axios";

class FormLogin extends Component {
  constructor() {
    super();

    this.inputEmail = React.createRef();
    this.inputPassword = React.createRef();

    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getAuthenticatedName = this.getAuthenticatedName.bind(this);

    this.state = {
      invalidEmail: false,
      invalidPassword: false
    };
  }

  handleClose() {
    this.props.handleClose();
  }

  getAuthenticatedName(name) {
    this.props.getAuthenticatedName(name);
  }

  handleLogin() {
    if (this.isValidForm()) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };

      axios
        .post(
          "http://calendar-api.nodejs.mmhp.tech/auth/login",
          "email=" +
            this.refs["inputEmail"].value +
            "&" +
            "password=" +
            this.refs["inputPassword"].value,
          config
        )
        .then(res => {
          var data = res.data;
          if (data.auth) {
            var token = data.token;
            console.log(token);

            // Set Cookie

            // Get User details
            fetch("http://calendar-api.nodejs.mmhp.tech/auth/me", {
              method: "GET",
              headers: new Headers({
                "x-access-token": token
              })
            })
              .then(response => response.json())
              .then(responseJson => {
                this.getAuthenticatedName(responseJson.name);
              })
              .catch(error => {
                console.error(error);
              });
          }
        })
        .catch(err => console.log(err));
    }
  }

  isValidForm() {
    var updatedState = {};
    if (this.refs["inputEmail"].value == "") {
      updatedState.invalidEmail = true;
    } else {
      updatedState.invalidEmail = false;
    }

    if (this.refs["inputPassword"].value == "") {
      updatedState.invalidPassword = true;
    } else {
      updatedState.invalidPassword = false;
    }

    this.setState(updatedState);

    return !updatedState.invalidEmail && !updatedState.invalidPassword;
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
            ref="inputEmail"
          />
          {this.state.invalidEmail ? (
            <p style={{ color: "red" }}>Invalid email</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref="inputPassword"
          />
          {this.state.invalidPassword ? (
            <p style={{ color: "red" }}>Invalid Password</p>
          ) : (
            ""
          )}
        </div>
        <div
          className="form-group form-inline text-right"
          style={{ marginBottom: "-40px" }}
        >
          <button
            className="btn btn-primary col-sm-6"
            onClick={this.handleClose}
          >
            Close
          </button>
          <button
            className="btn btn-success col-sm-6"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default FormLogin;
