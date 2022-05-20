import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

import React         from "react";
import { Container } from 'react-bootstrap';

import NavbarElem from "./components/NavbarElem"; //falta agregar componente
import DataChart  from "./components/DataChart";

import * as config from "../config.json";

import { crearDatosDeGraficaConListaDeMediciones,date_sort,EventoMedicion } from "./Data";

interface AppState {
  mediciones   : EventoMedicion[],
  fechaInicio ?: Date,
  fechaFin    ?: Date,
}

export default class App extends React.Component {
  private apiTimeout:number|null = null;

  public readonly state:AppState = {mediciones:new Array};

  constructor(props: any)
  {
    super(props);
  }

  componentDidMount()
  {
    this.sincronizarApi();
  }

  componentWillUnmount()
  {
    if(this.apiTimeout!==null)
      window.clearTimeout(this.apiTimeout);
  }

  crearHandlerCambioFecha(campoFecha:"fechaInicio"|"fechaFin")
  {
    const app = this;
    return function(evento:React.ChangeEvent)
    {
      const
        fecha = (evento.target as HTMLInputElement).valueAsDate,
        state = app.state
      ;

      if(fecha)
        state[campoFecha] = fecha;
      else
        delete state[campoFecha];

      app.setState(state);
      app.sincronizarApi();
    }
  }

  async enRespuestaDeApi(res:Response)
  {
    if(res.status==200)
      this.setState({'mediciones':(await res.json()).sort(date_sort)});
    else
      console.error("Error con la API ;w;",res);
    this.apiTimeout = window.setTimeout(this.sincronizarApi.bind(this),5000);
  }

  sincronizarApi()
  {
    if(this.apiTimeout)
      window.clearTimeout(this.apiTimeout);
    this.solicitarMedicionesDeApi().then(this.enRespuestaDeApi.bind(this));
  }

  solicitarMedicionesDeApi()
  {
    const params = new URLSearchParams;
    if(this.state.fechaInicio) params.set("fecha_inicio",this.state.fechaInicio.toISOString().slice(0,10));
    if(this.state.fechaFin) params.set("fecha_fin",this.state.fechaFin.toISOString().slice(0,10));
    return fetch(`${config.API_URL}/mediciones?${params}`);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarElem></NavbarElem>
        <Container fluid>
          <div className="filter-box">
            <label>Desde <input type="date" onChange={this.crearHandlerCambioFecha("fechaInicio")}/></label>
            <label>Hasta <input type="date" onChange={this.crearHandlerCambioFecha("fechaFin")}/></label>
          </div>
          <div className="flex-container">
            <div className="flex-child">
              <h2>Datos en vivo</h2>
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"temperatura","Temperatura","#FCA000")}/>
            </div>
            <div className="flex-child">
            <h2>Datos históricos</h2>
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"temperatura","Temperatura","#FCA000")}></DataChart>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-child">              
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"humedad","Humedad","#337DFF")}></DataChart>
            </div>
            <div className="flex-child">
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"humedad","Humedad","#337DFF")}></DataChart>
            </div>
          </div>

          <div className="flex-container">
            <div className="flex-child">
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"luminosidad","Luz","#58D68D")}></DataChart>
            </div>
            <div className="flex-child">          
              <DataChart chartData={crearDatosDeGraficaConListaDeMediciones(this.state.mediciones,"luminosidad","Luz","#58D68D")}></DataChart>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
