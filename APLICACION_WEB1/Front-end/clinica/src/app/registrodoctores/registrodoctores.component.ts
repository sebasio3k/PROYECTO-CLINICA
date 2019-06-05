import { Component, OnInit } from '@angular/core';
import { agregardoctor } from 'src/app/agregardoctor.model';
import { DoctorService } from '../services/doctores.service';
@Component({
  selector: 'app-registrodoctores',
  templateUrl: './registrodoctores.component.html',
  styleUrls: ['./registrodoctores.component.css']
})
export class RegistrodoctoresComponent implements OnInit {
 // model = new agregardoctor(1, '', '', '', '', '', '', null, '', null, null, '', '', '', null, null);
 data = {

    Nombre : '',
    apaterno : '',
    amaterno : '',
    genero : '',
    cedula : '',
    fracc : '',
    num : '',
    calle : '',
    edad : '',
    telefono : '',
    correo : '',
    especialidad : '',
    nconsultorio : '',
    sueldo : '',
    iddepartamento : ''
  };

constructor( public doctor2: DoctorService) { }

  ngOnInit() {
  }
  /*
  get currentregistro() {
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.doctor2.agregar(this.data);
  }

  validarDoctor() {

    // Si estan vacios:
    if ( (this.data.Nombre === '') || (this.data.apaterno === '') || (this.data.amaterno === '')
      || (this.data.genero === '') || (this.data.cedula === '') || (this.data.fracc === '')
      || (this.data.num === '') || (this.data.calle === '') || (this.data.edad === '')
      || (this.data.telefono === '') || (this.data.correo === '') || (this.data.especialidad === '')
      || (this.data.nconsultorio === '') || (this.data.sueldo === '') || (this.data.iddepartamento === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.Nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.apaterno)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.amaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.genero)) {
              if (/^([A-Za-z\sáéíóú]{2,16})+$/.test(this.data.cedula)) {
                if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(this.data.fracc)) {
                  if (/^([0-9]{3,4})+$/.test(this.data.num)) {
                    if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.calle)) {
                      if (/^([0-9]{2})+$/.test(this.data.edad)) {
                        if (/^([0-9]{10})+$/.test(this.data.telefono)) {
                          if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.data.correo)) {
                            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.especialidad)) {
                              // if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.nconsultorio)) {
                                if (/^([0-9]{1,4})+$/.test(this.data.sueldo)) {
                                  if (/^([0-9]{1,4})+$/.test(this.data.iddepartamento)) {
                                    alert('Datos Correctos');
                                    this.doctor2.agregar(this.data);
                                  } else {
                                    alert('Formato de Id Departamento inválido, por favor verificalo');
                                    return false;
                                  }
                                } else {
                                  alert('Formato de Sueldo inválido, por favor verificalo');
                                  return false;
                                }
                              // } else {
                              //   alert('Formato de nconsultorio inválido, por favor verificalo');
                              // }
                            } else {
                              alert('Formato de Especialidad inválido, por favor verificalo');
                              return false;
                            }
                          } else {
                            alert('Formato de Correo inválido, por favor verificalo');
                            return false;
                          }
                        } else {
                          alert('Formato de Teléfono inválido inválido, por favor verificalo');
                          return false;
                        }
                      } else {
                        alert('Formato de Edad inválido, por favor verificalo');
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
                alert('Formato de Cédula inválido, por favor verificalo');
                return false;
              }
            } else {
              alert('Formato de Género inválido, por favor verificalo');
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
    }
  }

}


