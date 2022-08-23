import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  @Input() TotalPuntos=0;
  @Input() Puntos=0;
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {};
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ["",""],
    datasets: [ {
      data:[0,100] ,
      backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];
  ngOnChanges(changes: SimpleChanges): void {
    if(this.Puntos>=0 && this.TotalPuntos>=0){
      this.ValoresChart()
    }
    else{
      this.ValoresChartInicio()
    }
  }
  ngOnInit(): void {
  }

  ValoresChart(){
    //Opciones
    this.pieChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
      }
    };
    //Datos
    this.pieChartData={
      labels: ["",""],
      datasets: [ {
      data:[this.Puntos,this.TotalPuntos-this.Puntos] ,
      backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
      hoverBackgroundColor:[
        '#00C356',
        '#E8E8E5'
      ],
      hoverBorderColor:[
        '#00C356',
        '#E8E8E5'
      ]
      }]
    }
  };

  ValoresChartInicio(){
    //Opciones
    this.pieChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
      }
    };
    //Datos
    this.pieChartData={
      labels: ["",""],
      datasets: [ {
        data:[0,100] ,
        backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
      }]
    }
  };
}
