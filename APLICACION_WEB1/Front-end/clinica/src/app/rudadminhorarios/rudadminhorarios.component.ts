import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../services/horarios.service';

@Component({
  selector: 'app-rudadminhorarios',
  templateUrl: './rudadminhorarios.component.html',
  styleUrls: ['./rudadminhorarios.component.css']
})
export class RudadminhorariosComponent implements OnInit {

  datos = [];
  constructor(public horario: HorarioService) { }
  horario2 = {
    idhorario : '',
    iddoctor : '',
    nconsultorio  : '',
    hora  : '',
  };

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

  // BUSCAR
  buscar1(horario) {
    this.horario.buscar1(horario);
  }
  // ACTUALIZAR
  actualizarHorario(horario2) {
    this.horario.actualizarHorario(horario2);
  }
  // ELIMINAR
  eliminarHorario(horario2) {

    this.horario.eliminarHorario(horario2);
  }

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

  validarHorario(horario2) {

    // Si estan vacios:
    if ((this.horario2.idhorario === '') || (this.horario2.iddoctor === '') || (this.horario2.nconsultorio === '')
    || (this.horario2.hora === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.horario2.idhorario)) {
        if (/^([0-9]{1,4})+$/.test(this.horario2.iddoctor)) {
          if (/^([A-Za-z\sáéíóú]{1,4})+$/.test(this.horario2.nconsultorio)) {
            if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(this.horario2.hora)) {
              alert('Datos Correctos');
              this.horario.actualizarHorario(horario2);
            } else {
              alert('Formato de Hora inválido, por favor verificalo');
              return false;
            }
          } else {
            alert('Formato de N. Consultorio inválido, por favor verificalo');
            return false;
          }
        } else {
          alert('Formato de Id Doctor inválido, por favor verificalo');
          return false;
        }
      } else {
            alert('Formato de Id Horario inválido, por favor verificalo');
            return false;
      }
    }
  }

  validarId(horario) {
    if (/^([0-9]{1,4})+$/.test(horario)) {
      alert('Datos Correctos');
      this.horario.buscar1(horario);
    } else {
      alert('Formato de Id Horario inválido, por favor verificalo');
      return false;
    }
  }

}
