import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadmintratamientos',
  templateUrl: './rudadmintratamientos.component.html',
  styleUrls: ['./rudadmintratamientos.component.css']
})
export class RudadmintratamientosComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idtratamiento: '1',
        Nombre: 'Daniel Sebastian',
        descripcion: 'Hernandez',
        precio: 'Ochoa'
     },
     {
      idtratamiento: '2',
        Nombre: 'Daniel Sebastian',
        descripcion: 'Hernandez',
        precio: 'Ochoa'
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

