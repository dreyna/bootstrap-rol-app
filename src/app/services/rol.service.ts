import { Injectable } from '@angular/core';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Rol } from '../models/rol';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private rolUrl:string = 'http://localhost:8080/roles';//endpoint

  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }

  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }
  getRoles():Observable<any>{
    return this.http.get(this.rolUrl+'/all');
  }
  getRol(id:number):Observable<any> {
    return this.http.get(`${this.rolUrl}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/roles']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
      })
    );
  }/*
  updateLogica(id:number):Observable<number> {
    return this.http.put<number>(this.rolUrl+"/update/logica/"+id).pipe(
      map((response:any) =>response),
      catchError(e =>{
        if(this.isNoAutorization(e)){
        return throwError(e)
        }
        if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }*/
  addRol(rol: Rol): Observable<number>{
    return this.http.post<number>(this.rolUrl+"/add", rol).pipe(
      map((response:any) =>response),
      catchError(e =>{
            if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
      );
  }

  deleteRol(id: number): Observable<number>{
    return this.http.delete<number>(this.rolUrl+"/delete/"+id ).pipe(
    catchError(e =>{
 
      console.error(e.error.mensaje);
      Swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
    );
  }

  updateRol(rol: Rol):Observable<number> {
    return this.http.put<number>(`${this.rolUrl}/update/${rol.idrol}`, rol).pipe(
      map((response:any) =>response),
      catchError(e =>{
        if(e.status == 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
