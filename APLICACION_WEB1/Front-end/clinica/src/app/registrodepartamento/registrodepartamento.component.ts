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

  // validarUsuario() {

  //   if ((this.name === '')||(this.ap === '')||(this.am === '')||(this.genere === '')||(this.neighborhood === '')||(this.number === '')||(this.streat === '')||(this.age === '')||(this.phone === '')||(this.email === '')) {
  //     alert('Se requiere que todos los campos esten llenos!');

  //   } else {
  //     /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
  //     if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.name)) {
  //       if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.ap)) {
  //         if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.am)) {
  //           if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.genere)) {
  //             if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.neighborhood)) {
  //               if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.number)) {
  //                 if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.streat)) {
  //                   if (/^([0-9]{2})+$/.test(this.age)) {
  //                     if (/^([0-9]{10})+$/.test(this.phone)) {
  //                       if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
  //                         alert('Datos Correctos');
  //                       } else {
  //                         alert('Formato de Correo inválido, por favor verificalo');
  //                       }
  //                     } else {
  //                       alert('Formato de Teléfono inválido inválido, por favor verificalo');
  //                     }
  //                   } else {
  //                     alert('Formato de Edad inválido, por favor verificalo');
  //                   }
  //                 } else {
  //                   alert('Formato de Calle inválido, por favor verificalo');
  //                 }
  //               } else {
  //                 alert('Formato de Número inválido, por favor verificalo');
  //               }
  //             } else {
  //               alert('Formato de Fracc. inválido, por favor verificalo');
  //             }
  //           } else {
  //             alert('Formato de Género inválido, por favor verificalo');
  //           }
  //         } else {
  //           alert('Formato de Apellido Materno inválido, por favor verificalo');
  //         }
  //       } else {
  //         alert('Formato de Apellido Paterno inválido, por favor verificalo');
  //       }
  //     } else {
  //       alert('Formato de Nombre inválido, por favor verificalo');
  //     }
  //   }

  // }

}
