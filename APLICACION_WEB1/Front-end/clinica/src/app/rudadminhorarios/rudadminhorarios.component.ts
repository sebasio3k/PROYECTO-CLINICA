import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../services/horarios.service';

@Component({
  selector: 'app-rudadminhorarios',
  templateUrl: './rudadminhorarios.component.html',
  styleUrls: ['./rudadminhorarios.component.css']
})
export class RudadminhorariosComponent implements OnInit {

  datos = [];
  constructor(public horario:HorarioService) { }
  horario2 ={
    idhorario : '',
    iddoctor : '',
    nconsultorio  : '',
    hora  : '',
   
  }
  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idhorario: '1',
        iddoctor: 'Daniel Sebastian',
        nconsultorio: 'Hernandez',
        hora: 'Ochoa'
     },
     {
      idhorario: '2',
      iddoctor: 'Daniel Sebastian',
      nconsultorio: 'Hernandez',
      hora: 'Ochoa'
     }

    ];
    console.log(this.datos);
  }

  //BUSCAR
buscar1(horario){
  this.horario.buscar1(horario);
}
//ACTUALIZAR
actualizarHorario(horario2){
  this.horario.actualizarHorario(horario2);
}
//ELIMINAR
eliminarHorario(horario2){

  this.horario.eliminarHorario(horario2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

}
