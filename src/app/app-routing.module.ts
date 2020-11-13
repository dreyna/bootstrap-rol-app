import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/roles/add/add.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { UpdateComponent } from './components/roles/update/update.component';
import { MenuComponent } from './components/template/menu/menu.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent},
  { path: "rol/add", component: AddComponent },
  { path: "editar/:id", component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
