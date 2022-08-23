import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroLssbExamenDetalleDTO } from 'src/app/Models/ExamenDetalleDTO';
import { RegistroLssbExamenRespuestaDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-estudio-pregunta',
  templateUrl: './estudio-pregunta.component.html',
  styleUrls: ['./estudio-pregunta.component.scss']
})
export class EstudioPreguntaComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService,
    private activatedRoute: ActivatedRoute,


  ) { }
  public migaPan = [
    {
      titulo: 'Simulador SSBB',
      urlWeb: '/',
    },
    {
      titulo: 'Modo estudio',
      urlWeb: '/ModoEstudio',
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
  public RegistroEnvioRespuesta:RegistroLssbExamenRespuestaDTO={
    id:0,
    idSimuladorLssbModo:0,
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
  public DetalleRespuestaEnvio:RegistroLssbExamenDetalleDTO={
    id:0,
    idSimuladorLssbExamen:0,
    idSimuladorLssbDominio:0,
    idSimuladorLssbTarea:0,
    idSimuladorLssbPregunta:0,
    ejecutado:false,
    idSimuladorLssbPreguntaRespuesta:0,
    puntaje:0,
    idAspNetUsers:'',
    usuario:''
  }
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
          this._router.navigate(['/ModoEstudio/EstudioReporte/'+this.IdExamen]);
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
    this.RespuestaMarcada=false;
      if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==1) {
        this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
          x.respuestaSelecionada=0
        })
        this.RespuestaMarcada=true;
        return 1;
      }
      if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==5) {
        this.RespuestaMarcada=true
        return 1;
      }
      this.RespuestaMarcada=false;
      return 0;

  }
  RegresarMenu(i:number){
    this.Retroalimentacion=false;
    this.PausarContador=true;
    this.EnviarRespuesta(i);
    this._router.navigate(['/ModoEstudio']);
  }
  EnviarRespuesta(i:number){
    this.RegistroEnvioRespuesta.respuestaDetalle=[],
    this.RegistroEnvioRespuesta.id=this.IdExamen,
    this.RegistroEnvioRespuesta.idSimuladorLssbModo=1,
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
        this.DetalleRespuestaEnvio.idSimuladorLssbPreguntaRespuesta=x.id;
        this.DetalleRespuestaEnvio.id=this.ListaPreguntas[i].id;
        this.DetalleRespuestaEnvio.idSimuladorLssbExamen=0;
        this.DetalleRespuestaEnvio.idSimuladorLssbDominio=0;
        this.DetalleRespuestaEnvio.idSimuladorLssbTarea=0;
        this.DetalleRespuestaEnvio.idSimuladorLssbPregunta=this.ListaPreguntas[i].idSimuladorLssbPregunta;
        this.DetalleRespuestaEnvio.ejecutado=false;
        this.DetalleRespuestaEnvio.puntaje=0;
        this.DetalleRespuestaEnvio.idAspNetUsers='';
        this.DetalleRespuestaEnvio.usuario=''
        if(this.ContadorPreguntaActual<=this.ContadorAux){
          this.RegistroEnvioRespuesta.estadoExamen=2
        }
        else{
          this.RegistroEnvioRespuesta.estadoExamen=3
        }
        this.RegistroEnvioRespuesta.respuestaDetalle.push(this.DetalleRespuestaEnvio)
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
    this._router.navigate(['/ModoEstudio']);
    this.ContadorPregunta=this.ContadorPregunta+1;
  }
  SiguientePregunta(){
    this.ContadorPregunta=this.ContadorPregunta+1;
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.Retroalimentacion=false;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this._router.navigate(['/ModoEstudio/EstudioReporte/'+this.IdExamen]);
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
