import { Inject, Injectable ,PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/shared/Services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCuentaGuard implements CanActivate {
  isBrowser: boolean;
  constructor(
    private _router: Router,
    private _SessionStorageService: SessionStorageService,
    @Inject(PLATFORM_ID) platformId: Object
  ){
    this.isBrowser = isPlatformBrowser(platformId);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isBrowser){
        if (this._SessionStorageService.validateTokken()) {
          this._router.navigate(['']);
          return false;
        }
      }
      return true;
  }

}
