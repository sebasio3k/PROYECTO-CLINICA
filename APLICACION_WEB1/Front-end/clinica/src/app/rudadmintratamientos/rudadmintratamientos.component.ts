import { Component, OnInit } from '@angular/core';
import { TratamientosService } from '../services/tratamientos.service';

@Component({
  selector: 'app-rudadmintratamientos',
  templateUrl: './rudadmintratamientos.component.html',
  styleUrls: ['./rudadmintratamientos.component.css']
})
export class RudadmintratamientosComponent implements OnInit {

  datos = [];
  constructor(public tratamiento: TratamientosService) { }
  tratamiento2 = {
    idtratamiento : '',
    nombre : '',
    descripcion  : '',
    precio  : '',
  };
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
// BUSCAR
buscar1(trat) {
  this.tratamiento.buscar1(trat);
}
// ACTUALIZAR
actualizarTratamiento(trat2) {
  this.tratamiento.actualizarTratamiento(trat2);
}
// ELIMINAR
eliminarTratamiento(trat2) {

  this.tratamiento.eliminarTratamiento(trat2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/


}

