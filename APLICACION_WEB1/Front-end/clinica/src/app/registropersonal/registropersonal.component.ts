import { Component, OnInit } from '@angular/core';
import { agregarpersonal } from 'src/app/agregarpersonal.model';
import { PersonalService } from '../services/personal.service';
@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.component.html',
  styleUrls: ['./registropersonal.component.css']
})
export class RegistropersonalComponent implements OnInit {
  // model = new agregarpersonal(1,1,'','','','','',null,'',null,null,'','',null,null);
  constructor(public personal2: PersonalService) { }
  data = {
    idtipo: '',
    nombre: '',
    apaterno : '',
    amaterno : '',
    genero : '',
    fracc : '',
    Num : '',
    calle : '',
    edad : '',
    telefono : '',
    correo : '',
    cedula : '',
    iddepartamento : '',
    sueldo : ''
  };

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.personal2.agregar(this.data);
  }

  validarPersonal() {

    // Si estan vacios:
    if ( (this.data.idtipo === '') || (this.data.nombre === '') || (this.data.apaterno === '')
      || (this.data.amaterno === '') || (this.data.genero === '') || (this.data.cedula === '')
      || (this.data.fracc === '') || (this.data.Num === '') || (this.data.calle === '')
      || (this.data.edad === '') || (this.data.telefono === '') || (this.data.correo === '')
      || (this.data.sueldo === '') || (this.data.iddepartamento === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.data.idtipo)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.nombre)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.apaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.amaterno)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.genero)) {
                if (/^([A-Za-z\sáéíóú]{2,16})+$/.test(this.data.cedula)) {
                  if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(this.data.fracc)) {
                    if (/^([0-9]{3,4})+$/.test(this.data.Num)) {
                      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.calle)) {
                        if (/^([0-9]{2})+$/.test(this.data.edad)) {
                          if (/^([0-9]{10})+$/.test(this.data.telefono)) {
                            if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.data.correo)) {
                              if (/^([0-9]{1,4})+$/.test(this.data.sueldo)) {
                                if (/^([0-9]{1,4})+$/.test(this.data.iddepartamento)) {
                                  alert('Datos Correctos');
                                  this.personal2.agregar(this.data);
                                } else {
                                  alert('Formato de Id Departamento inválido, por favor verificalo');
                                  return false;
                                }
                              } else {
                                alert('Formato de Sueldo inválido, por favor verificalo');
                                return false;
                              }
                            } else {
                              alert('Formato de Correo inválido, por favor verificalo');
                              return false;
                            }
                          } else {
                            alert('Formato de Teléfono inválido, por favor verificalo');
                            return false;
                          }
                        } else {
                          alert('Formato de Edad inválido inválido, por favor verificalo');
                          return false;
                        }
                      } else {
                        alert('Formato de Calle inválido, por favor verificalo');
                        return false;
                      }
                    } else {
                      alert('Formato de Número inválido, por favor verificalo');
                      return false;
                    }
                  } else {
                    alert('Formato de Fracc. inválido, por favor verificalo');
                    return false;
                  }
                } else {
                  alert('Formato de Cédula. inválido, por favor verificalo');
                  return false;
                }
              } else {
                alert('Formato de Génerp inválido, por favor verificalo');
                return false;
              }
            } else {
              alert('Formato de Apellido Materno inválido, por favor verificalo');
              return false;
            }
          } else {
            alert('Formato de Apellido Paterno inválido, por favor verificalo');
            return false;
          }
        } else {
          alert('Formato de Nombre inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Id Tipo inválido, por favor verificalo');
        return false;
      }
    }
  }

}




