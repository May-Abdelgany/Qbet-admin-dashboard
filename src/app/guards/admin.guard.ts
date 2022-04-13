import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _Router:Router) { }
  object:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.object=JSON.parse(localStorage.getItem("user")|| '{}');
      if(this.object.role =='admin'){
        return true;
      }
      else{
        this._Router.navigate(['notfound_page']);
        return false;
      }
  }

}
