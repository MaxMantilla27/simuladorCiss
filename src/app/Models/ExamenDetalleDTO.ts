export interface RegistroLssbExamenDetalleDTO{
  id:number,
  idSimuladorLssbExamen:number,
  idSimuladorLssbDominio:number,
  idSimuladorLssbTarea?:number,
  idSimuladorLssbPregunta:number,
  ejecutado:boolean,
  idSimuladorLssbPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
