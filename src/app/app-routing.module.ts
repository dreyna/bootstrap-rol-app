import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { UploadsComponent } from './components/uploads/uploads.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'listar', component: ListarComponent},
  {path:'producto', component:ProductoComponent},
  {path: 'uploads', component: UploadsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
