import { Component, OnInit } from '@angular/core';
import { agregardepartamento } from 'src/app/agregardepartamento.model';
import {DepartamentosService} from '../services/departamentos.service';
@Component({
  selector: 'app-registrodepartamento',
  templateUrl: './registrodepartamento.component.html',
  styleUrls: ['./registrodepartamento.component.css']
})
export class RegistrodepartamentoComponent implements OnInit {
 // model = new agregardepartamento(1, '', '');
 data = {
  nombre:	'',
  ubicacion:	''

};

  constructor(public departamentos2: DepartamentosService) { }

  // iddepartamento;
  // nombre;
  // ubicacion;

  ngOnInit() {
  }
  /*
  get currentregistro() {
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.departamentos2.agregar(this.data);
  }

  validarDepartamento() {

    if ((this.data.nombre === '') || (this.data.ubicacion === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.ubicacion)) {
          alert('Datos Correctos');
          this.departamentos2.agregar(this.data);
        } else {
            alert('Formato de Ubicación inválido, por favor verificalo');
            return false;
        }
      } else {
         alert('Formato de Nombre inválido inválido, por favor verificalo');
         return false;
      }
    }
  }

}
