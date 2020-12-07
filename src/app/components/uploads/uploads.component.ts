import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadsService } from 'src/app/services/uploads.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
private archivoseleccionado:File;
  constructor(private http: HttpClient, private router:Router,
    private uploadsService: UploadsService) { }

  ngOnInit(): void {
  }
public seleccionarArchivo(event){  
  this.archivoseleccionado= event.target.files[0];
  console.log(this.archivoseleccionado);
}
obtenerArchivo(){
  let user = JSON.parse(sessionStorage.getItem('usuario'));
  let id:number=user.idusuario;
  this.uploadsService.uploadArchivo(this.archivoseleccionado,id).subscribe(
    response => {
      swal.fire('Archivo', 'Guardado correctamente...!', "success")
    })
  }
}
