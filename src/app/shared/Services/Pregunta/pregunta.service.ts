import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  public urlBase=environment.url_api+'Pregunta';
  constructor(private http: HttpClient) { }

}
