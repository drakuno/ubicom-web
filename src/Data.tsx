import { eachDayOfInterval } from "date-fns/esm";
import eData from "./essayData.json";
import uData from "./essayData2.json";

function date_sort(a: { fecha: string | number | Date; }, b: { fecha: string | number | Date; }) {
  return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
}

//Temperatura -------------------------------------------//
var Temp = uData.map(function(obj){
  return ({
    "fecha" : obj.datetime,
    "temperatura": obj.valores.temperatura
  })
})
Temp.sort(date_sort);

export const TempData = {
  labels: Temp.map((data: { fecha: any; }) => data.fecha),
  datasets: [{
    label: "Temperatura",
    data: Temp.map((data: { temperatura: any; }) => data.temperatura),
    borderColor: "#FCA000",
    backgroundColor: "white"
  }]
}

//Luminosidad -------------------------------------------//

var Lum = uData.map(function(obj){
    return ({
      "fecha" : obj.datetime,
      "luminosidad": obj.valores.luminosidad
    })
})


Lum.sort(date_sort);

export const LumData = {
  labels: Lum.map((data: { fecha: any; }) => data.fecha),
  datasets: [{
    label: "Luminosidad",
    data: Lum.map((data: { luminosidad: any; }) => data.luminosidad),
    borderColor: "#58D68D",
    backgroundColor: "white"
  }]
}

//Humedad -------------------------------------------//
var Pres = uData.map(function(obj){
  return ({
    "fecha" : obj.datetime,
    "humedad": obj.valores.humedad
  })
})
Pres.sort(date_sort);

export const PresData = {
  labels: Pres.map((data: { fecha: any; }) => data.fecha),
  datasets: [{
    label: "Humedad",
    data: Pres.map((data: { humedad: any; }) => data.humedad),
    borderColor: "#337DFF",
    backgroundColor: "white"
  }]
}

export const GivenData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];