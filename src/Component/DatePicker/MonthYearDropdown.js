import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addMonths, subMonths } from "./Date_utils";

const MonthYearDropdown = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormatCalendar={"MMM yyyy"}
        minDate={subMonths(new Date(), 3)}
        maxDate={addMonths(new Date(), 3)}
        showMonthYearDropdown
      />
    </div>
  );
};
export default MonthYearDropdown;
