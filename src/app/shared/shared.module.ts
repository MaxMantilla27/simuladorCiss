import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './Components/header/header.component';
import { SafeHtmlPipe } from './Pipes/safe-html.pipe';
import { DefaultButtonComponent } from './Buttons/default-button/default-button.component';
import { LinkButtonComponent } from './Buttons/link-button/link-button.component';
import { BarrasComponent } from './Charts/Barras/barras.component';
import { LineComponent } from './Charts/Line/line.component';
import { DonaComponent } from './Charts/Dona/dona.component';
import { DonaPuntosComponent } from './Charts/DonaPuntos/dona-puntos.component';
import { PieComponent } from './Charts/Pie/pie.component';
import { MigaPanComponent } from './MigaPan/miga-pan.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    SafeHtmlPipe,
    DefaultButtonComponent,
    LinkButtonComponent,
    BarrasComponent,
    LineComponent,
    DonaComponent,
    DonaPuntosComponent,
    PieComponent,
    MigaPanComponent


  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,

    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    NgChartsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HeaderComponent,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MigaPanComponent,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    PieComponent,
    DonaComponent,
    BarrasComponent,
    LineComponent,
    DonaPuntosComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
