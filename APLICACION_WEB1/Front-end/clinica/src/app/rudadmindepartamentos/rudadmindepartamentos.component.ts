import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
@Component({
  selector: 'app-rudadmindepartamentos',
  templateUrl: './rudadmindepartamentos.component.html',
  styleUrls: ['./rudadmindepartamentos.component.css']
})
export class RudadmindepartamentosComponent implements OnInit {

  datos = [];

  constructor(public departamentos: DepartamentosService) { }

  dep2 = {
    iddepartamento : '',
    nombre  : '',
    ubicacion  : '',
  };

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        iddepartamento: '1',
        nombre: 'Daniel Sebastian',
        ubicacion: 'Hernandez',
     },
     {
      iddepartamento: '2',
      nombre: 'Daniel Sebastian',
      ubicacion: 'Hernandez',
     }

    ];
    console.log(this.datos);
  }
  // BUSCAR
  buscar1(depa) {
    this.departamentos.buscar1(depa);
  }
  // ACTUALIZAR
  actualizarDep(dep2) {
    this.departamentos.actualizarDep(dep2);
  }
  // ELIMINAR
  eliminarDep(dep2) {
    this.departamentos.eliminarDep(dep2);
  }

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

  validarDep(dep2) {

    if ( (dep2.nombre === '') || (dep2.ubicacion === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de usr SEA VALIDO*/
      // if (/^([0-9]{1,4})+$/.test(dep2.iddepartamento)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(dep2.nombre)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(dep2.ubicacion)) {
            alert('Datos Correctos');
            this.departamentos.actualizarDep(dep2);
          } else {
              alert('Formato de Ubicación inválido, por favor verificalo');
              return false;
          }
        } else {
          alert('Formato de Nombre inválido, por favor verificalo');
          return false;
        }
      // } else {
      //   alert('Formato de Id departamento inválido, por favor verificalo');
      //   return false;
      // }
    }
  }

  validarId(depa) {
    if (/^([0-9]{1,3})+$/.test(depa)) {
      alert('Datos Correctos');
      this.departamentos.buscar1(depa);
    } else {
      alert('Formato de Id Departamento inválido, por favor verificalo');
      return false;
    }
  }

}
