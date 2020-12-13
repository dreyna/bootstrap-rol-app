import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { RolService } from './services/rol.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { AuthService } from './services/auth.service';
import { ProductoComponent } from './components/producto/producto.component';
import { InterceptorService } from './interceptores/interceptor.service';
import { UploadsComponent } from './components/uploads/uploads.component';
import { InterceptorErrorService } from './interceptores/interceptorerror.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListarComponent,
    LoginComponent,
    ProductoComponent,
    UploadsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
