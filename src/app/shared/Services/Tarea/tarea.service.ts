import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  public urlBase=environment.url_api+'Tarea';
  constructor(private http: HttpClient) { }

}
