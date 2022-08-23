import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCuentaGuard } from './auth/GuardCuenta/auth-cuenta.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'Account/login',component:LoginComponent,canActivate:[AuthCuentaGuard]},
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
