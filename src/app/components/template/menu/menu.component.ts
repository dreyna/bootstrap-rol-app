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
  menus : object[];
  constructor(public authService:AuthService, private router:Router) { }
   
  ngOnInit(): void {
    let user= JSON.parse(sessionStorage.getItem('usuario'));   
    this.menus=user.accesos;
  }
logout():void{
  let username = this.authService.usuario.username;
  this.authService.logout();
  swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success')
  this.router.navigate(['/']);
}

}
