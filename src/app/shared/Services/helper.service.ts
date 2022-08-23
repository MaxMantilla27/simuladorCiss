import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DatoObservableDTO } from 'src/app/Models/DatoObservableDTO';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  private msjRecarga = new ReplaySubject<DatoObservableDTO>()


  public enviarDatoCuenta(datos: DatoObservableDTO): void {
    this.msjRecarga.next(datos);
  }
}
