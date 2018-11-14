import React, { Component } from "react";
import DateItem from "./DateItem";

class DateContainer extends Component {
  render() {
    var { currentMonth, currentYear } = this.props;
    let firstDay = new Date(currentYear, currentMonth).getDay();
    let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    let rowsInMonth = Math.ceil((firstDay + daysInMonth) / 7);

    var dateItems = () => {
      var totalDays = [];
      var counter = 0;
      for (var i = 0; i < rowsInMonth; i++) {
        var rowDays = [];
        for (var j = 0; j < 7; j++) {
          var key = "" + i + "" + j;
          var fixDate =
            counter - firstDay < 0 || counter - firstDay >= daysInMonth
              ? ""
              : counter - firstDay + 1;
          rowDays.push(<DateItem key={key} item={fixDate} />);
          counter += 1;
        }
        totalDays.push(<tr key={i}>{rowDays}</tr>);
      }
      return totalDays;
    };

    return (
      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{dateItems()}</tbody>
      </table>
    );
  }
}

export default DateContainer;
