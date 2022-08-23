import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialsDTO } from 'src/app/Models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AspNetUserService {
  public urlBase=environment.url_api+'AspNetUser';
  constructor(private http: HttpClient) { }

  public Authenticate(Json:UserCredentialsDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Authenticate',Json);
  }

}
