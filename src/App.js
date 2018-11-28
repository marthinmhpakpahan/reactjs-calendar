import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DateTitle from "./components/DateTitle";
import DateContainer from "./components/DateContainer";
import ButtonAction from "./components/ButtonAction";
import Popup from "./components/Popup";

class App extends Component {
  constructor() {
    super();

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var currentMonthYear = months[currentMonth] + " " + currentYear;

    this.state = {
      currentMonth: currentMonth,
      currentYear: currentYear,
      currentMonthYear: currentMonthYear,
      showPopup: false,
      userNameLogin: "",
      buttonLabel: "Login"
    };

    this.getCurrentMonthYear = this.getCurrentMonthYear.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.getAuthenticatedName = this.getAuthenticatedName.bind(this);
  }

  getCurrentMonthYear(month, year) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[month] + " " + year;
  }

  closePopup() {
    this.setState({
      showPopup: false
    });
  }

  onClick = type => {
    var newState = {
      currentMonth: "",
      currentMonthYear: ""
    };

    if (type == "next") {
      newState.currentMonth =
        this.state.currentMonth == 11 ? 0 : this.state.currentMonth + 1;
      newState.currentYear =
        newState.currentMonth == 0
          ? this.state.currentYear + 1
          : this.state.currentYear;

      newState.currentMonthYear = this.getCurrentMonthYear(
        newState.currentMonth,
        newState.currentYear
      );
    } else {
      newState.currentMonth =
        this.state.currentMonth == 0 ? 11 : this.state.currentMonth - 1;
      newState.currentYear =
        newState.currentMonth == 11
          ? this.state.currentYear - 1
          : this.state.currentYear;
      newState.currentMonthYear = this.getCurrentMonthYear(
        newState.currentMonth,
        newState.currentYear
      );
    }

    this.setState(newState);
  };

  handleClickLogin() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  getAuthenticatedName(name) {
    if (name != "") {
      this.setState({
        userNameLogin: name,
        showPopup: !this.state.showPopup,
        buttonLabel: "Logout"
      });
    }
  }

  render() {
    return (
      <div className="container col-sm-4 col-md-7 col-lg-4 mt-5">
        <div className="card">
          <DateTitle
            buttonLabel={this.state.buttonLabel}
            name={this.state.userNameLogin}
            currentMonthYear={this.state.currentMonthYear}
            handleClick={this.handleClickLogin}
          />
          <DateContainer
            currentMonth={this.state.currentMonth}
            currentYear={this.state.currentYear}
          />
          <div className="form-inline">
            <ButtonAction
              type="previous"
              label="Previous"
              onClick={this.onClick}
            />
            <ButtonAction type="next" label="Next" onClick={this.onClick} />
          </div>
          {this.state.showPopup ? (
            <Popup
              getAuthenticatedName={this.getAuthenticatedName}
              handleClose={this.closePopup}
              title="Login"
              content="This is content"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
