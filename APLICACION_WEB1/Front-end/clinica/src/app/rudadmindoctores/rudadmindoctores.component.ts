import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctores.service';
@Component({
  selector: 'app-rudadmindoctores',
  templateUrl: './rudadmindoctores.component.html',
  styleUrls: ['./rudadmindoctores.component.css']
})
export class RudadmindoctoresComponent implements OnInit {

  datos = [];

  constructor(public doctor: DoctorService) { }

  doctor2 = {
    iddoctores : '',
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

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        iddoctores: '1',
        Nombre: 'jorge',
        apaterno: 'olvias',
        amaterno: 'chairo',
        genero: 'hombre',
        cedula: '',
        fracc: '',
        num: '',
        calle: '',
        edad: '',
        telefono: '',
        correo: '',
        especialidad: '',
        nconsultorio: '',
        sueldo: '',
        iddepartamento: ''
     },
     {
      iddoctores: '1',
      Nombre: 'jorge',
      apaterno: 'olvias',
      amaterno: 'chairo',
      genero: 'hombre',
      cedula: '',
      fracc: '',
      num: '',
      calle: '',
      edad: '',
      telefono: '',
      correo: '',
      especialidad: '',
      nconsultorio: '',
      sueldo: '',
      iddepartamento: ''
     }

    ];
    console.log(this.datos);
  }

  // BUSCAR
  buscar1(doc) {
    this.doctor.buscar1(doc);
  }
  // ACTUALIZAR
  actualizarDoctor(doc2) {
    this.doctor.actualizarDoctor(doc2);
  }
  // ELIMINAR
  eliminarDoctor(doc2) {
    this.doctor.eliminarDoctor(doc2);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  validarDoctor(doc2) {
    // Si estan vacios:
    if ( (this.doctor2.Nombre === '') || (this.doctor2.apaterno === '') || (this.doctor2.amaterno === '')
      || (this.doctor2.genero === '') || (this.doctor2.cedula === '') || (this.doctor2.fracc === '')
      || (this.doctor2.num === '') || (this.doctor2.calle === '') || (this.doctor2.edad === '')
      || (this.doctor2.telefono === '') || (this.doctor2.correo === '') || (this.doctor2.especialidad === '')
      || (this.doctor2.nconsultorio === '') || (this.doctor2.sueldo === '') || (this.doctor2.iddepartamento === '')
      || (this.doctor2.iddoctores === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.doctor2.iddoctores)) {
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.Nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.apaterno)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.amaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.genero)) {
              if (/^([A-Za-z\sáéíóú]{2,16})+$/.test(this.doctor2.cedula)) {
                if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(this.doctor2.fracc)) {
                  if (/^([0-9]{3,4})+$/.test(this.doctor2.num)) {
                    if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.calle)) {
                      if (/^([0-9]{2})+$/.test(this.doctor2.edad)) {
                        if (/^([0-9]{10})+$/.test(this.doctor2.telefono)) {
                          if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.doctor2.correo)) {
                            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.especialidad)) {
                              // if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.doctor2.nconsultorio)) {
                                if (/^([0-9]{1,4})+$/.test(this.doctor2.sueldo)) {
                                  if (/^([0-9]{1,4})+$/.test(this.doctor2.iddepartamento)) {
                                    alert('Datos Correctos');
                                    this.doctor.actualizarDoctor(doc2);
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
      } else {
        alert('Formato de Id Doctor inválido, por favor verificalo');
        return false;
      }
    }
  }

  validarId(doc) {
    if (/^([0-9]{1,4})+$/.test(doc)) {
      alert('Datos Correctos');
      this.doctor.buscar1(doc);
    } else {
      alert('Formato de Id Doctor inválido, por favor verificalo');
      return false;
    }
  }

}
