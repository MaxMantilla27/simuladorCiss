import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ModoEstudioComponent } from './ModoEstudio/modo-estudio.component';
import { ModoEntrenamientoComponent } from './ModoEntrenamiento/modo-entrenamiento.component';
import { ModoExamenComponent } from './ModoExamen/modo-examen.component';
import { RankingComponent } from './Ranking/ranking.component';
import { ResultadosSimulacionesComponent } from './ResultadosSimulaciones/resultados-simulaciones.component';
import { SimulacionesGuardadasComponent } from './SimulacionesGuardadas/simulaciones-guardadas.component';
import { EstudioPreguntaComponent } from './ModoEstudio/EstudioPregunta/estudio-pregunta.component';
import { EstudioReporteComponent } from './ModoEstudio/EstudioReporte/estudio-reporte.component';
import { EstudioRespuestaPreguntaComponent } from './ModoEstudio/EstudioRespuestaPregunta/estudio-respuesta-pregunta.component';
import { EntrenamientoPreguntaComponent } from './ModoEntrenamiento/EntrenamientoPregunta/entrenamiento-pregunta.component';
import { EntrenamientoReporteComponent } from './ModoEntrenamiento/EntrenamientoReporte/entrenamiento-reporte.component';
import { EntrenamientoRespuestaPreguntaComponent } from './ModoEntrenamiento/EntrenamientoRespuestaPregunta/entrenamiento-respuesta-pregunta.component';
import { ExamenPreguntaComponent } from './ModoExamen/ExamenPregunta/examen-pregunta.component';
import { ExamenReporteComponent } from './ModoExamen/ExamenReporte/examen-reporte.component';
import { ExamenRespuestaPreguntaComponent } from './ModoExamen/ExamenRespuestaPregunta/examen-respuesta-pregunta.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    ModoEstudioComponent,
    ModoEntrenamientoComponent,
    ModoExamenComponent,
    SimulacionesGuardadasComponent,
    ResultadosSimulacionesComponent,
    RankingComponent,
    EntrenamientoPreguntaComponent,
    EntrenamientoReporteComponent,
    EntrenamientoRespuestaPreguntaComponent,
    EstudioPreguntaComponent,
    EstudioReporteComponent,
    EstudioRespuestaPreguntaComponent,
    ExamenPreguntaComponent,
    ExamenReporteComponent,
    ExamenRespuestaPreguntaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgChartsModule,
  ]
})
export class AuthModule { }
