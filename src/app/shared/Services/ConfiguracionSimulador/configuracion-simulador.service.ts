import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfiguracionSimuladorService {

  public urlBase=environment.url_api+'ConfiguracionSimulador';
  constructor(private http: HttpClient) { }

  public ObtenerConfiguracionSimulador():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerConfiguracionSimulador');
  }

  public ObtenerConfiguracionSimuladorSinToken():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerConfiguracionSimuladorSinToken');
  }


  public ObtenerPorcentaje():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerConfiguracionSimulador');
  }
}

