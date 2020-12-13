import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable,  throwError} from 'rxjs';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert2';
import { catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InterceptorErrorService implements HttpInterceptor{

  constructor(private authService:AuthService, private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    
    return next.handle(req).pipe(
      catchError(e => {
        if(e.status == 401){
          if(this.authService.isAuthenticated()){
            this.authService.logout();
          }
          this.router.navigate(['/login']);
        }
        if(e.status==403){
          swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no `)
          this.router.navigate(['/listar']);
        }
        return throwError(e);
      })
    )
  }
}
