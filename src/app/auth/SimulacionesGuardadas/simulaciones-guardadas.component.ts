import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-simulaciones-guardadas',
  templateUrl: './simulaciones-guardadas.component.html',
  styleUrls: ['./simulaciones-guardadas.component.scss']
})
export class SimulacionesGuardadasComponent implements OnInit {

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
      titulo: 'Simulaciones guardadas',
      urlWeb: '/SimulacionesGuardadas',
    },
  ];
  public SimulacionesIncompletas:any
  public ContExamenIncompleto=0;
  public ContEntrenamientoIncompleto=0;
  public ContEstudioIncompleto=0;
  ngOnInit(): void {
    this.ListaExamenesIncompletos()
  }
  ListaExamenesIncompletos(){
    this.ContExamenIncompleto=0;
    this.ContEntrenamientoIncompleto=0;
    this.ContEstudioIncompleto=0;
    this._ExamenService.ListaExamenesIncompletos().subscribe({
      next:(x)=>{
        this.SimulacionesIncompletas=x
        if(x!=undefined){
          this.SimulacionesIncompletas.forEach((y:any)=>{
            if(y.idSimuladorLssbModo==1){
              this.ContEstudioIncompleto=this.ContEstudioIncompleto+1
            }
            else if(y.idSimuladorLssbModo==2){
              this.ContEntrenamientoIncompleto=this.ContEntrenamientoIncompleto+1
            }
            else{
              this.ContExamenIncompleto=this.ContExamenIncompleto+1
            }
          })
        }
      }
    })
  }

}
