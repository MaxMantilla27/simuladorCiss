import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoPreguntaClasificacionService {

  public urlBase=environment.url_api+'TipoPreguntaClasificacion';
  constructor(private http: HttpClient) { }

}
