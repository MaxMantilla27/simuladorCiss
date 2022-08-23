import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { EntrenamientoPreguntaComponent } from './ModoEntrenamiento/EntrenamientoPregunta/entrenamiento-pregunta.component';
import { EntrenamientoReporteComponent } from './ModoEntrenamiento/EntrenamientoReporte/entrenamiento-reporte.component';
import { EntrenamientoRespuestaPreguntaComponent } from './ModoEntrenamiento/EntrenamientoRespuestaPregunta/entrenamiento-respuesta-pregunta.component';
import { ModoEntrenamientoComponent } from './ModoEntrenamiento/modo-entrenamiento.component';
import { EstudioPreguntaComponent } from './ModoEstudio/EstudioPregunta/estudio-pregunta.component';
import { EstudioReporteComponent } from './ModoEstudio/EstudioReporte/estudio-reporte.component';
import { EstudioRespuestaPreguntaComponent } from './ModoEstudio/EstudioRespuestaPregunta/estudio-respuesta-pregunta.component';
import { ModoEstudioComponent } from './ModoEstudio/modo-estudio.component';
import { ExamenPreguntaComponent } from './ModoExamen/ExamenPregunta/examen-pregunta.component';
import { ExamenReporteComponent } from './ModoExamen/ExamenReporte/examen-reporte.component';
import { ExamenRespuestaPreguntaComponent } from './ModoExamen/ExamenRespuestaPregunta/examen-respuesta-pregunta.component';
import { ModoExamenComponent } from './ModoExamen/modo-examen.component';
import { RankingComponent } from './Ranking/ranking.component';
import { ResultadosSimulacionesComponent } from './ResultadosSimulaciones/resultados-simulaciones.component';
import { SimulacionesGuardadasComponent } from './SimulacionesGuardadas/simulaciones-guardadas.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent  , canActivateChild:[AuthGuard] , children:
      [
        { path: '', component: HomeComponent},
        { path:'ModoEstudio', component: ModoEstudioComponent},
        { path:'ModoEntrenamiento', component: ModoEntrenamientoComponent},
        { path:'ModoExamen', component: ModoExamenComponent},
        { path:'SimulacionesGuardadas', component: SimulacionesGuardadasComponent},
        { path:'ResultadosSimulaciones', component: ResultadosSimulacionesComponent},
        { path:'Ranking', component: RankingComponent},

        { path:'ModoExamen/ExamenPregunta/:IdExamen', component: ExamenPreguntaComponent},
        { path:'ModoExamen/ExamenReporte/:IdExamen', component: ExamenReporteComponent},
        { path:'ModoExamen/ExamenRespuestaPregunta/:IdExamen', component: ExamenRespuestaPreguntaComponent},

        { path:'ModoEntrenamiento/EntrenamientoPregunta/:IdExamen', component: EntrenamientoPreguntaComponent},
        { path:'ModoEntrenamiento/EntrenamientoReporte/:IdExamen', component: EntrenamientoReporteComponent},
        { path:'ModoEntrenamiento/EntrenamientoRespuestaPregunta/:IdExamen', component: EntrenamientoRespuestaPreguntaComponent},

        { path:'ModoEstudio/EstudioPregunta/:IdExamen', component: EstudioPreguntaComponent},
        { path:'ModoEstudio/EstudioReporte/:IdExamen', component: EstudioReporteComponent},
        { path:'ModoEstudio/EstudioRespuestaPregunta/:IdExamen', component: EstudioRespuestaPreguntaComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
