import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  public urlBase=environment.url_api+'Dominio';
  constructor(private http: HttpClient) { }

  public Lista():Observable<any>{
    return this.http.get<any>(this.urlBase+'/Lista');
  }
  public ListaDominioCombo():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ListaDominioCombo');
  }

  public ObtenerLogo():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerLogo');
  }
}
