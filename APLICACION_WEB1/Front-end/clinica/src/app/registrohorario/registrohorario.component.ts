import { Component, OnInit } from '@angular/core';
import { horarios } from 'src/app/horarios.model';
import {HorarioService} from '../services/horarios.service';
@Component({
  selector: 'app-registrohorario',
  templateUrl: './registrohorario.component.html',
  styleUrls: ['./registrohorario.component.css']
})
export class RegistrohorarioComponent implements OnInit {
 // model = new horarios(1,'','');
 data = {
  iddoctor	:	'',
  nconsultorio	:	'',
  hora :	''
};
  constructor(public horario2: HorarioService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.horario2.agregar(this.data);
  }

  validarHorario() {

    // Si estan vacios:
    if ( (this.data.iddoctor === '') || (this.data.nconsultorio === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.data.iddoctor)) {
        if (/^([A-Za-z\sáéíóú\-\0-9]{2,10})+$/.test(this.data.nconsultorio)) {
          alert('Datos Correctos');
          this.horario2.agregar(this.data);
        } else {
          alert('Formato de N. Consultorio inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Id Doctor inválido, por favor verificalo');
        return false;
      }
    }
  }

}
