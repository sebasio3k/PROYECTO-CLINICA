import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadminpersonal',
  templateUrl: './rudadminpersonal.component.html',
  styleUrls: ['./rudadminpersonal.component.css']
})
export class RudadminpersonalComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpersonal: '1',
        idtipo: 'Daniel Sebastian',
        nombre: 'Hernandez',
        apaterno: 'Ochoa',
        amaterno: 'Hombre',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com',
        cedula: '202',
        iddepartamento: '202',
        sueldo: '202'
     },
     {
      idpersonal: '1',
      idtipo: 'Daniel Sebastian',
      nombre: 'Hernandez',
      apaterno: 'Ochoa',
      amaterno: 'Hombre',
      genero: 'Hombre',
      fracc: 'Granja Graciela',
      num: '202',
      calle: 'Justo Sierra',
      edad: '22',
      telefono: '6188402944',
      correo: 'bastianhdezo@gmail.com',
      cedula: '202',
      iddepartamento: '202',
      sueldo: '202'
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
