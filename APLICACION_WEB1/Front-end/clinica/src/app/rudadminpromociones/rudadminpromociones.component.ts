import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadminpromociones',
  templateUrl: './rudadminpromociones.component.html',
  styleUrls: ['./rudadminpromociones.component.css']
})
export class RudadminpromocionesComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpromocion: '1',
        descripcion: 'Daniel Sebastian',
        porcentajerebaja: 'Hernandez'
     },
     {
      idpromocion: '2',
      descripcion: 'Daniel Sebastian',
      porcentajerebaja: 'Hernandez'
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
