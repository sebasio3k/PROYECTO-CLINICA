import { Component, OnInit } from '@angular/core';
import {agregartratamiento } from 'src/app/agregartratamiento.model';
import { TratamientosService } from '../services/tratamientos.service';
@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {
 // model = new agregartratamiento(1,'','',null);
 data = {
    Nombre :	'',
    descripcion :	'',
    precio :	''
};
  constructor(public tratamiento2: TratamientosService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.tratamiento2.agregar(this.data);
  }

  validarTratamiento() {
    // Si estan vacios:
    if ( (this.data.Nombre === '') || (this.data.descripcion === '') || (this.data.precio === '')) {
      alert('Se requiere que todos los campos esten llenos!');
    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.Nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,100})+$/.test(this.data.descripcion)) {
          if (/^([0-9]{1,4})+$/.test(this.data.precio)) {
            alert('Datos Correctos');
            this.tratamiento2.agregar(this.data);
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

}
