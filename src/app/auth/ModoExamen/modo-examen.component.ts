import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamenIntentoDTO, RegistroLssbExamenDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-modo-examen',
  templateUrl: './modo-examen.component.html',
  styleUrls: ['./modo-examen.component.scss']
})
export class ModoExamenComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService
  ) { }
  public migaPan = [
    {
      titulo: 'Simulador SSBB',
      urlWeb: '/',
    },
    {
      titulo: 'Modo examen',
      urlWeb: '/ModoExamen',
    },
  ];
  public RegistrarExamenEnvio:RegistroLssbExamenDTO={
    id:0,
    idSimuladorLssbModo:0,
    nombreExamen:'',
    tiempo:0,
    idSimuladorLssbDominio:0
  }
  public IdExamen=0;
  public userForm :UntypedFormGroup=new UntypedFormGroup({
    NombreSimulacion: new UntypedFormControl('',Validators.required),
  })
  public DominioSeleccionado=0;
  public SimulacionesTotales=0;
  public SimulacionesInconclusas=0;
  public CantMExamen=0;
  public ListaExamen:any;
  public TiempoTotalEstudio=0;
  public Hora=0;
  public Minuto=0;
  public HoraMostrar='';
  public MinutoMostrar='';
  public SimulacionesIncompletas:any;
  public ContSimulacionesIncompletas=0;
  public SimulacionesCompletadas:any;
  public ContSimulacionesCompletadas=0;
  public PromedioDominio=0
  public ContEntrenamiento=0;
  public Promedio=0;
  public IntentosAprobados=0;
  public PorcentajeIntentosAprobados=0;
  public ExamenIntento:any;
  public ExamenPorIntento:ExamenIntentoDTO={
    Intento1:0,
    Intento2:0,
    Intento3:0,
    Intento4:0,
    Intento5:0,
    Intento6:0,
    Intento7:0,
    Intento8:0,
    Intento9:0,
    Intento10:0
  }
  public ExamenPorIntentoUsuario:ExamenIntentoDTO={
    Intento1:0,
    Intento2:0,
    Intento3:0,
    Intento4:0,
    Intento5:0,
    Intento6:0,
    Intento7:0,
    Intento8:0,
    Intento9:0,
    Intento10:0
  }
  public DatosIntento=false;
  public DatosIntentoUsuario=false;
  public BotonResgistrar=false;
  public ResultadosPorDominio:any

  ngOnInit(): void {
    this.ListaExamenesPorModo();
    this.ListaExamenesIncompletos();
    this.ListaExamenesConcluidos();
    this.ObtenerPromedioIntento();
    this.ObtenerPromedioDominioPorModo();
  }
  RegistrarExamen(){
    if(this.userForm.valid){
      this.BotonResgistrar=true;
      this.RegistrarExamenEnvio.id=0,
      this.RegistrarExamenEnvio.idSimuladorLssbModo=3,
      this.RegistrarExamenEnvio.nombreExamen=this.userForm.get('NombreSimulacion')?.value;
      this.RegistrarExamenEnvio.tiempo=0,
      this.RegistrarExamenEnvio.idSimuladorLssbDominio=0
      this._ExamenService.Registrar(this.RegistrarExamenEnvio).subscribe({
        next:(x)=>{
          this.IdExamen=x.id
          this._router.navigate(['/ModoExamen/ExamenPregunta/'+this.IdExamen]);
        }
      })
    }
  }

  ListaExamenesPorModo(){
    this.TiempoTotalEstudio=0;
    this._ExamenService.ListaExamenesPorModo(3).subscribe({
      next:(x)=>{
        this.ListaExamen=x
        this.CantMExamen=x.length;
        this.ListaExamen.forEach((x:any)=>{
          this.TiempoTotalEstudio=this.TiempoTotalEstudio+x.tiempo;
          if(x.estadoExamen=="Finalizado")
          this.SimulacionesTotales=this.SimulacionesTotales+1;
        })
        this.CantMExamen=x.length;
        this.SimulacionesInconclusas=this.CantMExamen-this.SimulacionesTotales;
      },
      complete: () => {
        this.Hora = Math.floor(this.TiempoTotalEstudio / 3600);
        this.HoraMostrar = (this.Hora < 10) ? '0' + this.Hora : this.Hora.toString();
        this.Minuto = Math.floor((this.TiempoTotalEstudio / 60) % 60);
        this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
      }
    });


  }
  ListaExamenesIncompletos(){
    this._ExamenService.ListaExamenesIncompletos().subscribe({
      next:(x)=>{
        this.SimulacionesIncompletas=x;
        this.SimulacionesIncompletas.forEach((y:any)=>{
          if(y.idEstadoExamen!=3 && y.idSimuladorLssbModo==3){
            this.ContSimulacionesIncompletas=x.length;
          }
        })
      }
    })
  }
  ListaExamenesConcluidos(){
    this.ContEntrenamiento=0;
    this.PromedioDominio=0;
    this.Promedio=0;
    this._ExamenService.ListaExamenesConcluidos().subscribe({
      next:(x)=>{
        if(x!=undefined){
          this.SimulacionesCompletadas=x;
          this.SimulacionesCompletadas.forEach((y:any)=>{
          if(y.idEstadoExamen==3 && y.idSimuladorLssbModo==3){
            this.ContSimulacionesCompletadas=x.length;
            this.ContEntrenamiento=this.ContEntrenamiento+1;
            this.PromedioDominio=this.PromedioDominio+y.desempenio;
            if(y.desempenio>=70){
              this.IntentosAprobados=this.IntentosAprobados+1
            }
            if(y.numeroIntento==1){
              this.ExamenPorIntentoUsuario.Intento1=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==2){
              this.ExamenPorIntentoUsuario.Intento2=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==3){
              this.ExamenPorIntentoUsuario.Intento3=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==4){
              this.ExamenPorIntentoUsuario.Intento4=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==5){
              this.ExamenPorIntentoUsuario.Intento5=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==6){
              this.ExamenPorIntentoUsuario.Intento6=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==7){
              this.ExamenPorIntentoUsuario.Intento7=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==8){
              this.ExamenPorIntentoUsuario.Intento8=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==9){
              this.ExamenPorIntentoUsuario.Intento9=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
            if(y.numeroIntento==10){
              this.ExamenPorIntentoUsuario.Intento10=Math.floor(y.desempenio)
              this.DatosIntentoUsuario=true;
            }
          }
        })
        this.Promedio=Math.floor(this.PromedioDominio/this.ContEntrenamiento);
        var aux=(this.IntentosAprobados/this.ContEntrenamiento)*100
          this.PorcentajeIntentosAprobados=Math.floor(aux)
        if(this.Promedio>=0){
          this.Promedio=this.Promedio;
        }
        else if(this.PorcentajeIntentosAprobados>=0){
          var aux=(this.IntentosAprobados/this.ContEntrenamiento)*100
          this.PorcentajeIntentosAprobados=Math.floor(aux)
        }
        else{
          this.Promedio=0;
          this.PorcentajeIntentosAprobados=0
        }
        }
      }
    })
  }
  ObtenerPromedioIntento(){
    this._ExamenService.ObtenerPromedioIntento().subscribe({
      next:(x)=>{
        if(x!=null){
          this.ExamenIntento=x
          this.ExamenIntento.forEach((y:any)=>{
          if(y.numeroIntento==1){
            this.ExamenPorIntento.Intento1=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==2){
            this.ExamenPorIntento.Intento2=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==3){
            this.ExamenPorIntento.Intento3=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==4){
            this.ExamenPorIntento.Intento4=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==5){
            this.ExamenPorIntento.Intento5=Math.floor(y.desempenio)
          }
          else if(y.numeroIntento==6){
            this.ExamenPorIntento.Intento6=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==7){
            this.ExamenPorIntento.Intento7=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==8){
            this.ExamenPorIntento.Intento8=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==9){
            this.ExamenPorIntento.Intento9=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
          else if(y.numeroIntento==10){
            this.ExamenPorIntento.Intento10=Math.floor(y.desempenio)
            this.DatosIntento=true;
          }
        })
        }
      }
    })
  }
  ObtenerPromedioDominioPorModo(){
    this._ExamenService.ObtenerPromedioDominioPorModo(3).subscribe({
      next:(x)=>{
        this.ResultadosPorDominio=x
      }
    })
  }
}
