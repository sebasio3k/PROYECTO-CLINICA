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

  validarTratamiento(trata2) {
    // Si estan vacios:
    if ( (trata2.Nombre === '') || (trata2.descripcion === '') || (trata2.precio === '')) {
      alert('Se requiere que todos los campos esten llenos!');
    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú\0-9]{2,30})+$/.test(trata2.Nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,100})+$/.test(trata2.descripcion)) {
          if (/^([0-9\.]{1,4})+$/.test(trata2.precio)) {
            alert('Datos Correctos');
            this.tratamiento.actualizarTratamiento(trata2);
          } else {
            alert('Formato de Precio inválido, por favor verificalo');
            return false;
          }
        } else {
          alert('Formato de Descripción inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Nombre inválido, por favor verificalo');
        return false;
      }
    }
  }

  validarId(depa) {
    if (/^([0-9]{1,4})+$/.test(depa)) {
      alert('Datos Correctos');
      this.tratamiento.buscar1(depa);
    } else {
      alert('Formato de Id Tratamiento inválido, por favor verificalo');
      return false;
    }
  }

}

