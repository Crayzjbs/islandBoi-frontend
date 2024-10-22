import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // default theme file
import "./custom-theme.css"; // Import the custom theme CSS file
import "./calendar.css"; // Import the CSS file

export default function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Load saved dates from local storage when the component mounts
  useEffect(() => {
    const savedDates = localStorage.getItem("bookingDates");
    if (savedDates) {
      setState(JSON.parse(savedDates));
    }
  }, []);

  const handleSelect = (ranges) => {
    console.log(ranges); // { selection: { startDate, endDate } }
    setState([ranges.selection]);
    // Save the selected dates to local storage
    localStorage.setItem("bookingDates", JSON.stringify([ranges.selection]));
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
    </div>
  );
}
