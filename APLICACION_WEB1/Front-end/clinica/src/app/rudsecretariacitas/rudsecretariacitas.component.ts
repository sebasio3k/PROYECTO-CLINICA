import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-rudsecretariacitas',
  templateUrl: './rudsecretariacitas.component.html',
  styleUrls: ['./rudsecretariacitas.component.css']
})
export class RudsecretariacitasComponent implements OnInit {

  datos = [];
  constructor(public citas:CitasService) { }

      cita2 ={

        idcita : '',
        idpaciente  : '',
        hora  : '',
        fecha  : '',
        iddoctor  : '',
        nconsultorio  : '',
        precio : '',
       estatus : ''
      }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idcita: '1',
        idpaciente: 'Daniel Sebastian',
        fecha: 'Hernandez',
        iddoctor: 'Ochoa',
        nconsultorio: 'Hombre',
        precio: 'Granja Graciela',
        estatus: '202'
     },
     {
      idcita: '2',
      idpaciente: 'Daniel Sebastian',
      fecha: 'Hernandez',
      iddoctor: 'Ochoa',
      nconsultorio: 'Hombre',
      precio: 'Granja Graciela',
      estatus: '202'
     }

    ];
    console.log(this.datos);
  }
//BUSCAR
buscar1(cita){
  this.citas.buscar1(cita);
}
//ACTUALIZAR
actualizarCita(cita2){
  this.citas.actualizarCita(cita2);
}
//ELIMINAR
eliminarCita(cita2){

  this.citas.eliminarCita(cita2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

}
