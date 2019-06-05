import { Component, OnInit } from '@angular/core';
import { historial } from 'src/app/historial.model';
import { HistorialService } from '../services/historial.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  // model = new historial (1, 1,'','',1);
  data = {
    idpaciente : '',
    idcita	: '',
    descripcioncita	: '',
    observaciones	: '',
    iddoctor : ''
  };
  constructor(public historial2: HistorialService) { }

  ngOnInit() {
  }
  /*get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.historial2.agregar(this.data);
  }

  validarHistorial() {
    // Si estan vacios:
    if ((this.data.idpaciente === '') || (this.data.idcita === '')  || (this.data.descripcioncita === '')
    || (this.data.observaciones === '') || (this.data.iddoctor === '') ) {
      alert('Se requiere que todos los campos esten llenos');
      return false;
    } else {// si no
      /*VALIDA QUE EL formato de correo SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.data.idpaciente)) {
        if (/^([0-9]{1,4})+$/.test(this.data.idcita)) {
          if (/^([A-Za-z\sáéíóú]{2,200})+$/.test(this.data.descripcioncita)) {
            if (/^([A-Za-z\sáéíóú]{2,1000})+$/.test(this.data.observaciones)) {
              if (/^([0-9]{1,4})+$/.test(this.data.iddoctor)) {
                alert('Datos Correctos');
                this.historial2.agregar(this.data);
              } else {
                alert('Formato de Id Doctor Inválido');
                return false;
              }
            // } else {

            // }
            } else {
                alert('Formato de Observaciones Inválido');
                return false;
            }
          } else {
            alert('Formato de Descripcion Cita Inválido');
            return false;
          }
        } else {
          alert('Formato de Id Cita Inválido');
          return false;
        }
      } else {
        alert('Formato de Id Paciente Inválido');
        return false;
      }
    }
  }

}




