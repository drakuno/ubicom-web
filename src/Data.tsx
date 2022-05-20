export interface EventoMedicion {
  datetime : string,
  valores  : {[tipo:string]:number},
}

export function date_sort(a:EventoMedicion, b:EventoMedicion)
{
  return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
}

export function crearDatosDeGraficaConListaDeMediciones(
  datos:EventoMedicion[],
  tipoDeMedicion:string,
  etiqueta:string|null=null,
  color:string|null=null,
)
{
  return {
    labels: datos.map((data)=>data.datetime),
    datasets: [{
      label: etiqueta||tipoDeMedicion,
      data: datos.filter(data=>typeof data.valores[tipoDeMedicion]=="number").map((data)=>data.valores[tipoDeMedicion]),
      borderColor: color||"teal",
      backgroundColor: "white"
    }]
  };
};

