import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import {AuthrutasGuard} from './../app/services/guards/authrutas.guard';
import { RoleGuard } from './services/guards/role.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'listar', component: ListarComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'ADMIN'}},
  {path:'producto', component:ProductoComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'ADMIN'}},
  {path: 'uploads', component: UploadsComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'ADMIN'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
