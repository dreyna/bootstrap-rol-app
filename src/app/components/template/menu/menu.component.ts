import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MergeScanSubscriber } from 'rxjs/internal/operators/mergeScan';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus : object[]=null;
  user:any;
  constructor(public authService:AuthService, private router:Router) { 
    this.user= JSON.parse(sessionStorage.getItem('usuario')); 
  
  }
   
  ngOnInit(): void {
    this.menu();  
  }
logout():void{
  let username = this.authService.usuario.username;
  this.authService.logout();
  swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success')
  this.router.navigate(['/']);
}
menu():void{
  if(this.authService.isAuthenticated()){
    this.menus=this.user.accesos;
  }
}

}
