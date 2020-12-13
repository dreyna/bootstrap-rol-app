import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './../auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthrutasGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuthenticated()){
        if(this.istokenExpirado()){
          this.authService.logout();
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  istokenExpirado():boolean{
    let token = this.authService.token;
    let payload = this.authService.obtenerDatosToken(token);
    let now = new Date().getTime()/1000;
    if(payload.exp<now){
      return true;
    }else{
      return false;
    }
  }
}
