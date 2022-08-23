import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-examen-respuesta-pregunta',
  templateUrl: './examen-respuesta-pregunta.component.html',
  styleUrls: ['./examen-respuesta-pregunta.component.scss']
})
export class ExamenRespuestaPreguntaComponent implements OnInit {

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
      titulo: 'Modo examen',
      urlWeb: '/ModoExamen',
    },
  ];
  public IdExamen=0
  public DatosExamen:any;
  public ListaPreguntas:any;
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public NombreDominio=''

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerRespuestaExamenDetallePreguntaPorId()
  }
  ObtenerRespuestaExamenDetallePreguntaPorId(){
    this._ExamenService.ObtenerRespuestaExamenDetallePreguntaPorId(this.IdExamen).subscribe({
      next:(x)=>{
        this.DatosExamen=x;
        this.ListaPreguntas=x.pregunta
        this.CantidadTotalPreguntas=x.length;
        this.ContadorPreguntaActual=this.ContadorPregunta+1;
        this.NombreDominio=x[0].dominioNombre;
      }
    })
  }
  RegresarMenu(){
    this._router.navigate(['/ModoExamen']);
  }
  SiguientePregunta(){
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.ContadorPregunta=this.ContadorPregunta+1;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this._router.navigate(['/ModoExamen/ExamenReporte/'+this.IdExamen]);
    }
  }

}
