import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-resultados-simulaciones',
  templateUrl: './resultados-simulaciones.component.html',
  styleUrls: ['./resultados-simulaciones.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ResultadosSimulacionesComponent implements OnInit {

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
      titulo: 'Resultados de simulaciones',
      urlWeb: '/ResultadosSimulaciones',
    },
  ];
  public SimulacionesCompletadas:any
  public ContExamenCompleto=0;
  public ContEntrenamientoCompleto=0;
  public ContEstudioCompleto=0;
  ngOnInit(): void {
    this.ListaExamenesConcluidos()
  }
  ListaExamenesConcluidos(){
    this._ExamenService.ListaExamenesConcluidos().subscribe({
      next:(x)=>{
        this.SimulacionesCompletadas=x
        if(x!=undefined){
          this.SimulacionesCompletadas.forEach((y:any)=>{
            if(y.idSimuladorLssbModo==1){
              this.ContEstudioCompleto=this.ContEstudioCompleto+1
            }
            else if(y.idSimuladorLssbModo==2){
              this.ContEntrenamientoCompleto=this.ContEntrenamientoCompleto+1
            }
            else{
              this.ContExamenCompleto=this.ContExamenCompleto+1
            }
          })
        }
      }
    })
  }
}
