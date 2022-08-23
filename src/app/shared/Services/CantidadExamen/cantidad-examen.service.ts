import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CantidadExamenService {

  public urlBase=environment.url_api+'CantidadExamen';
  constructor(private http: HttpClient) { }

}
