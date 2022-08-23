import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionStorageService } from '../shared/Services/session-storage.service';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private _SessionStorageService: SessionStorageService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.RequestWhitHeaders(request));
  }
  RequestWhitHeaders(request: HttpRequest<any>) {

    if (this._SessionStorageService.validateTokken()) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this._SessionStorageService.GetToken()
        ),
      });
    }
    return request
  }
}
