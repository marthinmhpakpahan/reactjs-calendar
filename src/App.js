import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DateTitle from "./components/DateTitle";
import DateContainer from "./components/DateContainer";
import ButtonAction from "./components/ButtonAction";

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
      currentMonthYear: currentMonthYear
    };

    this.getCurrentMonthYear = this.getCurrentMonthYear.bind(this);
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
      console.log(newState.currentMonth);

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

  render() {
    return (
      <div className="container col-sm-4 col-md-7 col-lg-4 mt-5">
        <div className="card">
          <DateTitle currentMonthYear={this.state.currentMonthYear} />
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
        </div>
      </div>
    );
  }
}

export default App;
