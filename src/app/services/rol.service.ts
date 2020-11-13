import { Injectable } from '@angular/core';
import {Observable, Subscription, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Rol } from '../models/rol';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private rolUrl:string = 'http://localhost:8080/roles';//endpoint

  constructor(private http: HttpClient) { }
  getRoles():Observable<any>{
    return this.http.get(this.rolUrl+'/all');
  }
  getRol(id:number):Observable<any> {
    return this.http.get(`${this.rolUrl}/${id}`);
  }
  updateLogica(id:number):Observable<number> {
    return this.http.put<number>(`${this.rolUrl}/update/logica/${id}`,{headers:this.httpHeaders});
  }
  addRol(rol: Rol): Observable<number>{
    return this.http.post<number>(this.rolUrl+"/add", rol, {headers:this.httpHeaders});
  }

  deleteRol(id: number): Observable<number>{
    return this.http.delete<number>(this.rolUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateRol(rol: Rol):Observable<number> {
    return this.http.put<number>(`${this.rolUrl}/update/${rol.id_rol}`, rol,{headers:this.httpHeaders});
  }
}
