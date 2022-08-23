import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor() { }

  @Input() ResultadoDominio1=0;
  @Input() ResultadoDominio2=0;
  @Input() ResultadoDominio3=0;
  @Input() ResultadoDominio4=0;
  @Input() ResultadoDominio5=0;
  @Input() ResultadoDominio6=0;
  @Input() ResultadoDominio7=0;
  @Input() ResultadoDominio8=0;
  @Input() ResultadoDominio9=0;

  public barChartOptions: ChartConfiguration['options'] = {};
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DatalabelsPlugin];
  public barChartData: ChartData<'bar'> = {
    labels: [ 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'],
    datasets: [
      { data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        label: 'Puntaje',
        backgroundColor: '#00C356',
        hoverBackgroundColor:[
          '#00C356',
        ],
        hoverBorderColor:[
          '#00C356',
        ],
        borderColor:[
          '#00C356',
        ]
      }
    ]
  };
  ngOnChanges(changes: SimpleChanges): void {
    if(this.ResultadoDominio1!=0 ||
      this.ResultadoDominio2!=0 ||
      this.ResultadoDominio3!=0 ||
      this.ResultadoDominio4!=0 ||
      this.ResultadoDominio5!=0 ||
      this.ResultadoDominio6!=0 ||
      this.ResultadoDominio7!=0 ||
      this.ResultadoDominio8!=0 ||
      this.ResultadoDominio9!=0 ){
      this.ValoresChart()
    }
    if(this.ResultadoDominio1==0 &&
      this.ResultadoDominio2==0 &&
      this.ResultadoDominio3==0 &&
      this.ResultadoDominio4==0 &&
      this.ResultadoDominio5==0 &&
      this.ResultadoDominio6==0 &&
      this.ResultadoDominio7==0 &&
      this.ResultadoDominio8==0 &&
      this.ResultadoDominio9==0 ){
      this.ValoresChartInicio()
    }
  }
  ngOnInit(): void {

  }
  ValoresChart(){
    //Opciones
    this.barChartOptions={
      responsive: true,
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: {
          display: true,
        },

      }
    }
    //Datos
    this.barChartData={
      labels: [ 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'],
      datasets: [
        { data: [ this.ResultadoDominio1,
          this.ResultadoDominio2,
          this.ResultadoDominio3,
          this.ResultadoDominio4],
          label: 'Puntaje (%)',
          backgroundColor: '#00C356',
          hoverBackgroundColor:[
            '#00C356',
          ],
          hoverBorderColor:[
            '#00C356',
          ],
          borderColor:[
            '#00C356',
          ]}
      ]
    }
  }

  ValoresChartInicio(){
    //Opciones
    this.barChartOptions={
      responsive: true,
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    }
    //Datos
    this.barChartData={
      labels: [ 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'],
      datasets: [
        { data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          label: 'Puntaje',
          backgroundColor: '#00C356',
          hoverBackgroundColor:[
            '#00C356',
          ],
          hoverBorderColor:[
            '#00C356',
          ],
          borderColor:[
            '#00C356',
          ]}
      ]
    }
  }

}
