import { Component, OnInit } from '@angular/core';
import {agregartratamientopaciente } from 'src/app/agregartratamientopaciente.model';
import {TratamientospacienteService } from '../services/tratamientopaciente.service';
@Component({
  selector: 'app-tratamientopaciente',
  templateUrl: './tratamientopaciente.component.html',
  styleUrls: ['./tratamientopaciente.component.css']
})
export class TratamientopacienteComponent implements OnInit {
 // model = new agregartratamientopaciente(1,null,null,null,null,'','',null);
 datos = [];
 constructor( public tratamiento: TratamientospacienteService) { }
 data = {
    idtratamiento : '',
    idpaciente	:	'',
    ncitas	:	'',
    iddoctor	:	'',
    modalidadpago	:	'',
    pagos	:	'',
};


  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.tratamiento.agregar(this.data);
  }
  buscar() {
    this.tratamiento.buscar();
  }

  validarTratamiento() {

    // Si estan vacios:
    if ( (this.data.idtratamiento === '') || (this.data.idpaciente === '') || (this.data.iddoctor === '')
      || (this.data.ncitas === '') || (this.data.modalidadpago === '') || (this.data.pagos === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.data.idtratamiento)) {
        if (/^([0-9]{1,4})+$/.test(this.data.idpaciente)) {
          if (/^([0-9]{1,4})+$/.test(this.data.iddoctor)) {
            if (/^([0-9]{1,4})+$/.test(this.data.ncitas)) {
              // if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.modalidadpago)) {
              if (/^([0-9]{1,4})+$/.test(this.data.pagos)) {
                  alert('Datos Correctos');
                  this.tratamiento.agregar(this.data);
              } else {
                alert('Formato de Precio inválido, por favor verificalo');
                return false;
              }
            } else {
              alert('Formato de Num. Citas inválido, por favor verificalo');
              return false;
            }
          } else {
            alert('Formato de Id Doctor inválido, por favor verificalo');
            return false;
          }
        } else {
          alert('Formato de Id Paciente inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Id Tratamiento inválido, por favor verificalo');
        return false;
      }
    }
  }

}
