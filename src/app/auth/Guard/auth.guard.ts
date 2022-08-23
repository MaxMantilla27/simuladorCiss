import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/shared/Services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private _SessionStorageService: SessionStorageService,
    private _router: Router,
  ){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._SessionStorageService.validateTokken()){
    return true;
    }
    this._router.navigate(['Account/login'])
    return false;
  }


}
