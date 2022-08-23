import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

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
      titulo: 'Ranking',
      urlWeb: '/Ranking',
    },
  ];
  public DatoRanking:any
  public Intento=1;
  ngOnInit(): void {
    this.ObtenerListaRankingExamenPorIntento(1)
    this.Intento=1;
  }
  ObtenerListaRankingExamenPorIntento(Intento:number){

    this._ExamenService.ObtenerListaRankingExamenPorIntento(Intento).subscribe({
      next:(x)=>{
        this.DatoRanking=x
        this.Intento=Intento
      }
    })
  }
}
