import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroCissExamenDetalleDTO } from 'src/app/Models/ExamenDetalleDTO';
import { RegistroCissExamenRespuestaDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-entrenamiento-pregunta',
  templateUrl: './entrenamiento-pregunta.component.html',
  styleUrls: ['./entrenamiento-pregunta.component.scss']
})
export class EntrenamientoPreguntaComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService,
    private activatedRoute: ActivatedRoute,

  ) { }
  public migaPan = [
    {
      titulo: 'Simulador CISSP',
      urlWeb: '/',
    },
    {
      titulo: 'Modo entrenamiento',
      urlWeb: '/ModoEntrenamiento',
    },
  ];
  public IdExamen=0;
  public DatosExamen:any;
  public ListaPreguntas:any;
  public NombreDominio='';
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public ContadorAux=0;
  public valPregunta=false
  public TiempoSegundo=0;
  public Hora=0;
  public Minuto=0;
  public Segundo=0;
  public HoraMostrar='';
  public MinutoMostrar='';
  public SegundoMostrar='';
  public RegistroEnvioRespuesta:RegistroCissExamenRespuestaDTO={
    id:0,
    idSimuladorCissModo:0,
    nombreExamen:'',
    tiempo:0,
    idAspNetUsers:'',
    usuario:'',
    estadoExamen:0,
    puntaje:0,
    desempenio:0,
    percentil:0,
    respuestaDetalle: [],
    idSimuladorTipoRespuesta:0
  }
  public DetalleRespuestaEnvio:RegistroCissExamenDetalleDTO={
    id:0,
    idSimuladorCissExamen:0,
    idSimuladorCissDominio:0,
    idSimuladorCissTarea:0,
    idSimuladorCissPregunta:0,
    ejecutado:false,
    idSimuladorCissPreguntaRespuesta:0,
    puntaje:0,
    idAspNetUsers:'',
    usuario:''
  }
  /* public DetalleRespuestaEnvio:any */
  public Retroalimentacion= false;
  public RespuestaCorrecta=false;
  public RespuestaMarcada=false;
  public PausarContador=true;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerExamenDetallePreguntaPorId();
  }

  ObtenerExamenDetallePreguntaPorId(){
    this._ExamenService.ObtenerExamenDetallePreguntaPorId(this.IdExamen).subscribe({
      next:(x)=>{
        this.DatosExamen=x;
        this.ListaPreguntas=x.listaPreguntas;
        if(this.ListaPreguntas.length==0){
          this._router.navigate(['/ModoEntrenamiento/EntrenamientoReporte/'+this.IdExamen]);
        }
        else{
          this.CantidadTotalPreguntas=x.preguntasPendientes+x.preguntasRespondidas;
          this.ContadorPreguntaActual=this.ContadorPregunta+1+x.preguntasRespondidas;
          this.NombreDominio=this.ListaPreguntas[0].dominioNombre;
          this.ContadorAux=this.CantidadTotalPreguntas-1;
          this.TiempoSegundo=x.tiempo;
          this.PausarContador=false;
          this.Cronometro(this.TiempoSegundo);
        }
      }
    })
  }
  chageRadio(value: number,i: number, j: number) {
    if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==1) {
      this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
        x.respuestaSelecionada=0
      })
      return 1;
    }
    if (value == 1 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==1) {
      return 0;
    }
    if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==5) {
      return 1;
    }
    if (value == 1 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==5) {
      return 0;

    }
    else return 0;
}
VerificarMarcado(i:number){
  this.RespuestaMarcada=false
  this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
    if( x.respuestaSelecionada==1){
      this.RespuestaMarcada=true
    }
  })
}
RegresarMenu(i:number){
  this.Retroalimentacion=false;
  this.PausarContador=true;
  this.EnviarRespuesta(i);
  this._router.navigate(['/ModoEntrenamiento']);
}
EnviarRespuesta(i:number){
  this.RegistroEnvioRespuesta.respuestaDetalle=[],
    this.RegistroEnvioRespuesta.id=this.IdExamen,
    this.RegistroEnvioRespuesta.idSimuladorCissModo=2,
    this.RegistroEnvioRespuesta.nombreExamen='',
    this.RegistroEnvioRespuesta.tiempo=this.TiempoSegundo,
    this.RegistroEnvioRespuesta.idAspNetUsers='',
    this.RegistroEnvioRespuesta.usuario='',
    this.RegistroEnvioRespuesta.puntaje=0,
    this.RegistroEnvioRespuesta.desempenio=0,
    this.RegistroEnvioRespuesta.percentil=0,
    this.RegistroEnvioRespuesta.idSimuladorTipoRespuesta=this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta,
    this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
      if(x.respuestaSelecionada==1){
        if(this.ContadorPreguntaActual<=this.ContadorAux){
          this.RegistroEnvioRespuesta.estadoExamen=2
        }
        else{
          this.RegistroEnvioRespuesta.estadoExamen=3
        }
        this.RegistroEnvioRespuesta.respuestaDetalle.push({
          idSimuladorCissPreguntaRespuesta:x.id,
          id:this.ListaPreguntas[i].id,
          idSimuladorCissExamen:0,
          idSimuladorCissDominio:0,
          idSimuladorCissTarea:0,
          idSimuladorCissPregunta:this.ListaPreguntas[i].idSimuladorCissPregunta,
          ejecutado:false,
          puntaje:0,
          idAspNetUsers:'',
          usuario:''
        })
      }

    })
    this._ExamenService.RegistrarRespuestaSeleccion(this.RegistroEnvioRespuesta).subscribe({
      next:(x)=>{
        this.RespuestaCorrecta=x
      },
      complete:()=>{
        this.Retroalimentacion=true
      },
    })
    this.RespuestaMarcada=false
}
 SalirRetroalimentacion(){
  this.PausarContador=true;
    this._router.navigate(['/ModoEntrenamiento']);
    this.ContadorPregunta=this.ContadorPregunta+1;
  }
  SiguientePregunta(){
    this.ContadorPregunta=this.ContadorPregunta+1;
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.Retroalimentacion=false;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this._router.navigate(['/ModoEntrenamiento/EntrenamientoReporte/'+this.IdExamen]);
    }
  }
  Cronometro(TiempoSegundo:number){
    if(this.PausarContador==false){
      TiempoSegundo=TiempoSegundo+1;
    this.Hora = Math.floor(TiempoSegundo / 3600);
    this.HoraMostrar = (this.Hora < 10) ? '0' + this.Hora : this.Hora.toString();
    this.Minuto = Math.floor((TiempoSegundo / 60) % 60);
    this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
    this.Segundo = TiempoSegundo % 60;
    this.SegundoMostrar = (this.Segundo < 10) ? '0' + this.Segundo : this.Segundo.toString();
    setTimeout(()=>{
      this.Cronometro(TiempoSegundo);
    },1000)
    this.TiempoSegundo=TiempoSegundo;
    }
  }
}
