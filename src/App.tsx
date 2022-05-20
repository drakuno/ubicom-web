import "bootstrap/dist/css/bootstrap.css";

import NavbarElem from "./components/NavbarElem"; //falta agregar componente
import { Container } from 'react-bootstrap';
import DataChart from "./components/DataChart";
import { GivenData, TempData, PresData, LumData } from "./Data";
import "./css/App.css";
import TimeFilter from "./components/TimeFilter";

export default class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      labels: GivenData.map((data: { year: any; }) => data.year),
      datasets: [{
        label: "Some label",
        data: GivenData.map((data: { userGain: any; }) => data.userGain),
        borderColor: "#337DFF",
        backgroundColor: "white"
      }]
    }
  }
  

  render() {
    return (
      <React.Fragment>
        <NavbarElem></NavbarElem>
        <Container fluid>
          <div className="filter-box">
            <TimeFilter></TimeFilter>
          </div>
          <div className="flex-container">
            <div className="flex-child">
              <h2>Datos en vivo</h2>
              <DataChart chartData={TempData}></DataChart>
            </div>
            <div className="flex-child">
            <h2>Datos históricos</h2>
              <DataChart chartData={TempData}></DataChart>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-child">              
              <DataChart chartData={PresData}></DataChart>
            </div>
            <div className="flex-child">
              <DataChart chartData={PresData}></DataChart>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-child">
              <DataChart chartData={LumData}></DataChart>
            </div>
            <div className="flex-child">          
              <DataChart chartData={LumData}></DataChart>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
