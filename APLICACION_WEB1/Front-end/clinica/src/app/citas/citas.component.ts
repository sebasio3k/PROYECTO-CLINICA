import { Component, OnInit } from '@angular/core';
import { agregarcitas } from 'src/app/agregarcita.model';
import { CitasService } from '../services/citas.service';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  data = {
    idpaciente:	'',
    hora: '',
    fecha:	'',
    iddoctor:	'',
    nconsultorio:	'',
    precio:	'',
    estatus:	'',
  };

  constructor(public citas2: CitasService) { }

  ngOnInit() {
  }
  /*get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.citas2.agregar(this.data);
  }

  validarCita() {

    // Si estan vacios:
    if ((this.data.idpaciente === '') || (this.data.hora === '')  || (this.data.fecha === '')
    || (this.data.iddoctor === '') || (this.data.nconsultorio === '')  || (this.data.precio === '')
    || (this.data.estatus === '')) {
      alert('Se requiere que todos los campos esten llenos');
      return false;
    } else {// si no
      /*VALIDA QUE EL formato de correo SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.data.idpaciente)) {
        if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(this.data.hora)) {
          if (/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(this.data.fecha)) {
            if (/^([0-9]{1,4})+$/.test(this.data.iddoctor)) {
            // if (regcontra.test(this.nconsultorio)) {
              if (/^\d{1,3}(\.\d{2})?$/.test(this.data.precio)) {
                // if (tyc.test(this.estatus)) {
                //   alert('Selecciona el estatus');
                // } else {

                    this.citas2.agregar(this.data);

                    // }
              } else {
                alert('Formato de precio Inválido');
                return false;
              }
            // } else {

            // }
            } else {
                alert('Formato de Id Doctor Inválido');
                return false;
            }
          } else {
            alert('Formato de Fecha Inválido');
            return false;
          }
        } else {
          alert('Formato de Hora Inválido');
          return false;
        }
      } else {
        alert('Formato de Id Paciente Inválido');
        return false;
      }
    }
  }

}
