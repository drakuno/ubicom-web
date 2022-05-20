import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function TimeFilter() {
    return(
        <DateRangePickerComponent placeholder="Introduce un rango de fechas"></DateRangePickerComponent>
    )
}