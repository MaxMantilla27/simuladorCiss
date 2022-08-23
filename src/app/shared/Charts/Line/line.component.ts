import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  @Input() ExamenPorIntento:any;
  @Input() ExamenPorIntentoUsuario:any;
  public lineChartOptions: ChartConfiguration['options'] = {};
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        label: 'Puntaje promedio global',
        backgroundColor: 'transparent',
        borderColor: '#00C356',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00C356',
        fill: 'origin',
      },
      {
        data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        label: 'Tu puntaje',
        backgroundColor: 'transparent',
        borderColor: '#0C9AFE',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0C9AFE',
        fill: 'origin',
      },

    ],
    labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
  };
  ngOnChanges(changes: SimpleChanges): void {
    if(this.ExamenPorIntento.Intento1!=0 ||
        this.ExamenPorIntento.Intento2!=0 ||
        this.ExamenPorIntento.Intento3!=0 ||
        this.ExamenPorIntento.Intento4!=0 ||
        this.ExamenPorIntento.Intento5!=0 ||
        this.ExamenPorIntento.Intento6!=0 ||
        this.ExamenPorIntento.Intento7!=0 ||
        this.ExamenPorIntento.Intento8!=0 ||
        this.ExamenPorIntento.Intento9!=0 ||
        this.ExamenPorIntento.Intento10!=0 ||
        this.ExamenPorIntentoUsuario.Intento1!=0 ||
        this.ExamenPorIntentoUsuario.Intento2!=0 ||
        this.ExamenPorIntentoUsuario.Intento3!=0 ||
        this.ExamenPorIntentoUsuario.Intento4!=0 ||
        this.ExamenPorIntentoUsuario.Intento5!=0 ||
        this.ExamenPorIntentoUsuario.Intento6!=0 ||
        this.ExamenPorIntentoUsuario.Intento7!=0 ||
        this.ExamenPorIntentoUsuario.Intento8!=0 ||
        this.ExamenPorIntentoUsuario.Intento9!=0 ||
        this.ExamenPorIntentoUsuario.Intento10!=0  ){
      this.ValoresChart()
    }
    if(this.ExamenPorIntento.Intento1==0 &&
      this.ExamenPorIntento.Intento2==0 &&
      this.ExamenPorIntento.Intento3==0 &&
      this.ExamenPorIntento.Intento4==0 &&
      this.ExamenPorIntento.Intento5==0 &&
      this.ExamenPorIntento.Intento6==0 &&
      this.ExamenPorIntento.Intento7==0 &&
      this.ExamenPorIntento.Intento8==0 &&
      this.ExamenPorIntento.Intento9==0 &&
      this.ExamenPorIntento.Intento10==0 &&
      this.ExamenPorIntentoUsuario.Intento1==0 &&
      this.ExamenPorIntentoUsuario.Intento2==0 &&
      this.ExamenPorIntentoUsuario.Intento3==0 &&
      this.ExamenPorIntentoUsuario.Intento4==0 &&
      this.ExamenPorIntentoUsuario.Intento5==0 &&
      this.ExamenPorIntentoUsuario.Intento6==0 &&
      this.ExamenPorIntentoUsuario.Intento7==0 &&
      this.ExamenPorIntentoUsuario.Intento8==0 &&
      this.ExamenPorIntentoUsuario.Intento9==0 &&
      this.ExamenPorIntentoUsuario.Intento10==0 ){
      this.ValoresChartInicio()
    }
  }
  ngOnInit(): void {
  }

  ValoresChart(){
    //Opciones
    this.lineChartOptions={
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
        }
      },
    }
    //Datos
    this.lineChartData={
      datasets: [
        {
          data: [ this.ExamenPorIntento.Intento1,
            this.ExamenPorIntento.Intento2,
            this.ExamenPorIntento.Intento3,
            this.ExamenPorIntento.Intento4,
            this.ExamenPorIntento.Intento5,
            this.ExamenPorIntento.Intento6,
            this.ExamenPorIntento.Intento7,
            this.ExamenPorIntento.Intento8,
            this.ExamenPorIntento.Intento9,
            this.ExamenPorIntento.Intento10],
          label: 'Puntaje promedio global',
          backgroundColor: 'transparent',
          borderColor: '#00C356',
          pointBackgroundColor: '#00C356',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00C356',
          fill: 'origin',
        },
        {
          data: [this.ExamenPorIntentoUsuario.Intento1,
            this.ExamenPorIntentoUsuario.Intento2,
            this.ExamenPorIntentoUsuario.Intento3,
            this.ExamenPorIntentoUsuario.Intento4,
            this.ExamenPorIntentoUsuario.Intento5,
            this.ExamenPorIntentoUsuario.Intento6,
            this.ExamenPorIntentoUsuario.Intento7,
            this.ExamenPorIntentoUsuario.Intento8,
            this.ExamenPorIntentoUsuario.Intento9,
            this.ExamenPorIntentoUsuario.Intento10 ],
          label: 'Tu puntaje',
          backgroundColor: 'transparent',
          borderColor: '#0C9AFE',
          pointBackgroundColor: '#0C9AFE',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0C9AFE',
          fill: 'origin',
        },

      ],
      labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
    }
  }
  ValoresChartInicio(){
    //Opciones
    this.lineChartOptions={
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
        }
      },
    }
    //Datos
    this.lineChartData={
      datasets: [
        {
          data: [  0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: 'Puntaje promedio global',
          backgroundColor: 'transparent',
          borderColor: '#00C356',
          pointBackgroundColor: '#00C356',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00C356',
          fill: 'origin',
        },
        {
          data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: 'Tu puntaje',
          backgroundColor: 'transparent',
          borderColor: '#0C9AFE',
          pointBackgroundColor: '#0C9AFE',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0C9AFE',
          fill: 'origin',
        },

      ],
      labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
    }
  }
}
