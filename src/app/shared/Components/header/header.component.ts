import { asNativeElements, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AvatarDTO } from 'src/app/Models/AvatarDTO';
import { DatoObservableDTO } from 'src/app/Models/DatoObservableDTO';
import { AvatarService } from '../../Services/Avatar/avatar.service';
import { HelperService } from '../../Services/helper.service';
import { SessionStorageService } from '../../Services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') matMenu!: MatMenu;
  constructor(
    private _router: Router,
    private _SessionStorageService:SessionStorageService,
    private _HelperService:HelperService,
    private _AvatarService:AvatarService
  ) { }
  private signal$ = new Subject();

  ngOnDestroy(): void {
    this.signal$.next(true)
    this.signal$.complete()
  }
  public NombreAlumno=''
  public resise=false;
  public DatoObservable: DatoObservableDTO ={
    datoAvatar: false,
    datoContenido: false,
  }
  public urlAvatar='';
  public Avatar: AvatarDTO = {
    accessories: '',
    clothes: '',
    clothes_Color: '',
    eyes: '',
    eyesbrow: '',
    facial_Hair: '',
    facial_Hair_Color: '',
    hair_Color: '',
    idAlumno: 0,
    idAspNetUsers: '',
    idAvatar: 0,
    mouth: '',
    skin: '',
    topC: ''
  };
  public token: boolean = this._SessionStorageService.validateTokken();

  ngOnInit(): void {
    if (this.token) {
      this.ObtenerAvatar();
    }
  }
  OpenMenu(){

    console.log(document.getElementsByClassName('matmenuCustom')[0].clientWidth)

  }
  resiseMenu(e:any){
    e.stopPropagation();
    this.resise=!this.resise
  }
  ObtenerAvatar() {
    this._AvatarService.ObtenerAvatar().pipe(takeUntil(this.signal$)).subscribe({
      next: (x) => {
        this.Avatar = x;
        this.NombreAlumno = x.nombres
        this.urlAvatar=this._AvatarService.GetUrlImagenAvatar(this.Avatar);
      },
    });
  }
  cerrarSesion() {
    this._SessionStorageService.DeleteToken();
    this._HelperService.enviarDatoCuenta(this.DatoObservable);
    this._router.navigate(['Account/login']);
  }
}
