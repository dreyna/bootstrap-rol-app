import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;
  constructor(private http: HttpClient) { }
  login(usuario:Usuario):Observable<any>{
    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '1234567');

    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Basic ' + credenciales});
      let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username',usuario.username);
      params.set('password',usuario.password);
      console.log(usuario.username);
      console.log(usuario.password);
    return this.http.post(urlEndpoint, params.toString(), {headers:httpHeaders});
  }
  guadarUser(accesToken: string):void{
    this._usuario = new Usuario();
  }
  guadarToken(accesToken: string):void{

  }
}
