import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavbarElem from "./components/NavbarElem"; //falta agregar componente
import { Container}  from 'react-bootstrap';
import DataChart from "./components/DataChart";
import { GivenData } from "/home/isaac/ubicom-web/src/Data";

export default class App extends React.Component {
  constructor(props:any){
    super(props)
    this.state = {
      labels: GivenData.map((data: { year: any; })=>data.year),
      datasets: [{
        label: "Some label",
        data: GivenData.map((data: { userGain: any; })=>data.userGain),
      }]
    }
  }

  render() {
    /*const [givenData,setGivenData] = useState({
      labels: GivenData.map((data: { year: any; })=>data.year),
      datasets: [{
        label: "Some label",
        data: GivenData.map((data: { userGain: any; })=>data.userGain),

      }]
    })*/
    return (
      <React.Fragment>
        <NavbarElem></NavbarElem>
        <p>Hello, World!! Isaac</p>
        <Container fluid>
          <DataChart chartData={this.state}></DataChart>
        </Container>
      </React.Fragment>
    );
  }
}