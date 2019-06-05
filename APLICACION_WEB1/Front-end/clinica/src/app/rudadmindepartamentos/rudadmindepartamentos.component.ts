import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
@Component({
  selector: 'app-rudadmindepartamentos',
  templateUrl: './rudadmindepartamentos.component.html',
  styleUrls: ['./rudadmindepartamentos.component.css']
})
export class RudadmindepartamentosComponent implements OnInit {

  datos = [];
  constructor(public departamentos:DepartamentosService) { }
  dep2 ={

    iddepartamento : '',
    nombre  : '',
    ubicacion  : '',
   
  }
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
//BUSCAR
buscar1(depa){
  this.departamentos.buscar1(depa);
}
//ACTUALIZAR
actualizarDep(dep2){
  this.departamentos.actualizarDep(dep2);
}
//ELIMINAR
eliminarDep(dep2){

  this.departamentos.eliminarDep(dep2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

}
