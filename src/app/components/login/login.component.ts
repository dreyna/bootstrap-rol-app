import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
titulo ='Autentificar...!';
usuario:Usuario;
  constructor(private authService:AuthService, private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
login(){
  if(this.usuario.username==null || this.usuario.password==null){
    swal.fire('Error Login', 'Username o password vacías!', 'error');
    return;
  }
  this.authService.login(this.usuario).subscribe(response =>{
    console.log(response);
    let payload = JSON.parse(atob(response.access_token.split(".")[1]));
    console.log(payload);
    //this.router.navigate(['/listar']);
    this.authService.guadarUser(response.access_token);
    this.authService.guadarToken(response.access_token);
    swal.fire('Login', `Hola ${payload.user_name}, has iniciado sesion con éxito`, 'success');
  })
}
}
