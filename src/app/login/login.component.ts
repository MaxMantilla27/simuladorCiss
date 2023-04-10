import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatoObservableDTO } from '../Models/DatoObservableDTO';
import { loginDTO, UserCredentialsDTO } from '../Models/login';
import { AspNetUserService } from '../shared/Services/AspNetUsers/asp-net-users.service';
import { HelperService } from '../shared/Services/helper.service';
import { SessionStorageService } from '../shared/Services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _AspNetUsers:AspNetUserService,
    private _SessionStorageService:SessionStorageService,
    private _HelperService:HelperService
  ) { }
  statuscharge=false;
  public DatoObservable: DatoObservableDTO ={
    datoAvatar: false,
    datoContenido: false,
  }
  public errorLogin=''

  public CamposLogin:loginDTO={
    email:'',
    password:'',
    recordar:false
  }
  public CuentaLogin:UserCredentialsDTO = {
    username:'',
    password:''
  }
  public userForm :UntypedFormGroup=new UntypedFormGroup({
    Email: new UntypedFormControl(this.CamposLogin.email,Validators.required),
    Password: new UntypedFormControl(this.CamposLogin.password,Validators.required),
    Recordar: new UntypedFormControl(this.CamposLogin.recordar,Validators.required),
  })

  ngOnInit(): void {
    this.userForm.patchValue({
      Email:this.CamposLogin.email,
      Password:this.CamposLogin.password,
      Recordar:this.CamposLogin.recordar,
    })
  }
  Login(){
    if(this.userForm.valid){
      this.CuentaLogin.username=this.userForm.get('Email')?.value;
      this.CuentaLogin.password=this.userForm.get('Password')?.value;
      this._AspNetUsers.Authenticate(this.CuentaLogin).subscribe({
      next: x => {
        this.statuscharge=false
          this._SessionStorageService.SetToken(x.token)
          this.DatoObservable.datoAvatar=true
          this.DatoObservable.datoContenido=true
          this._HelperService.enviarDatoCuenta(this.DatoObservable)
          this.router.navigate(['']);
      },
      error:e=>{
        this.statuscharge=false
        this.errorLogin=e.error.excepcion.descripcionGeneral;
        setTimeout(()=>{
          this.errorLogin='';
        },10000);
      },
      complete:()=>{
        this.statuscharge=false
      }
    })
    }
  }
}
