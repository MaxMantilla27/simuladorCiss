export interface RegistroCissExamenDetalleDTO{
  id:number,
  idSimuladorCissExamen:number,
  idSimuladorCissDominio:number,
  idSimuladorCissTarea?:number,
  idSimuladorCissPregunta:number,
  ejecutado:boolean,
  idSimuladorCissPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
