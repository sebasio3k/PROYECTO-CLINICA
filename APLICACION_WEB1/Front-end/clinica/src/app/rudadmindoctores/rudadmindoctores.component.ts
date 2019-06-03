import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadmindoctores',
  templateUrl: './rudadmindoctores.component.html',
  styleUrls: ['./rudadmindoctores.component.css']
})
export class RudadmindoctoresComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        iddoctores: '1',
        Nombre: 'jorge',
        apaterno: 'olvias',
        amaterno: 'chairo',
        genero: 'hombre',
        cedula: '',
        fracc: '',
        num: '',
        calle: '',
        edad: '',
        telefono: '',
        correo: '',
        especialidad: '',
        nconsultorio: '',
        sueldo: '',
        iddepartamento: ''
     },
     {
      iddoctores: '1',
      Nombre: 'jorge',
      apaterno: 'olvias',
      amaterno: 'chairo',
      genero: 'hombre',
      cedula: '',
      fracc: '',
      num: '',
      calle: '',
      edad: '',
      telefono: '',
      correo: '',
      especialidad: '',
      nconsultorio: '',
      sueldo: '',
      iddepartamento: ''
     }

    ];
    console.log(this.datos);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }


}
