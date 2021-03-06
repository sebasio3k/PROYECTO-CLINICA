import { Component, OnInit } from '@angular/core';
import { registro } from 'src/app/registro.model';
import { PacienteService } from '../services/paciente.service';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
// model = new registro(1,'','','','','',null,'',null,null,'');

  data = {
    nombre:	'',
    apaterno:	'',
    amaterno:	'',
    genero:	'',
    fracc:	'',
    num:	'',
    calle:	'',
    edad:	'',
    telefono:	'',
    correo:	''
  };

  constructor( public paciente2: PacienteService) { }
  name;
  ap;
  am;
  genere;
  neighborhood;
  number;
  streat;
  age;
  phone;
  email;

  ngOnInit() {
  }



  agregar() {
    this.paciente2.agregar(this.data);
  }
  // get currentregistro(){
  //   return JSON.stringify(this.model);
  // }

  validarUsuario() {
    if ((this.name === '') || (this.ap === '') || (this.am === '')
     || (this.genere === '') || (this.neighborhood === '') || (this.number === '')
     || (this.streat === '') || (this.age === '') || (this.phone === '') || (this.email === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.name)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.ap)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.am)) {
            if (/^(Masculono|Femenino|masculino|femenino)*$/.test(this.genere)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.neighborhood)) {
                if (/^([0-9]{4})+$/.test(this.number)) {
                  if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.streat)) {
                    if (/^([0-9]{2})+$/.test(this.age)) {
                      if (/^([0-9]{10})+$/.test(this.phone)) {
                        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
                          alert('Datos Correctos');
                          this.paciente2.agregar(this.data);
                        } else {
                          alert('Formato de Correo inválido, por favor verificalo');
                        }
                      } else {
                        alert('Formato de Teléfono inválido inválido, por favor verificalo');
                      }
                    } else {
                      alert('Formato de Edad inválido, por favor verificalo');
                    }
                  } else {
                    alert('Formato de Calle inválido, por favor verificalo');
                  }
                } else {
                  alert('Formato de Número inválido, por favor verificalo');
                }
              } else {
                alert('Formato de Fracc. inválido, por favor verificalo');
              }
            } else {
              alert('Formato de Género inválido, por favor verificalo');
            }
          } else {
            alert('Formato de Apellido Materno inválido, por favor verificalo');
          }
        } else {
          alert('Formato de Apellido Paterno inválido, por favor verificalo');
        }
      } else {
        alert('Formato de Nombre inválido, por favor verificalo');
      }
    }
  }

}
