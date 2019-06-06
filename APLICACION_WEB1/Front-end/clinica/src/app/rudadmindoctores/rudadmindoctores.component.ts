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
    if ( (doc2.Nombre === '') || (doc2.apaterno === '') || (doc2.amaterno === '')
      || (doc2.genero === '') || (doc2.cedula === '') || (doc2.fracc === '')
      || (doc2.num === '') || (doc2.calle === '') || (doc2.edad === '')
      || (doc2.telefono === '') || (doc2.correo === '') || (doc2.especialidad === '')
      || (doc2.nconsultorio === '') || (doc2.sueldo === '') || (doc2.iddepartamento === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      // if (/^([0-9]{1,4})+$/.test(doc2.iddoctores)) {
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.Nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.apaterno)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.amaterno)) {
            if (/^(Masculono|Femenino|masculino|femenino)*$/.test(doc2.genero)) {
              if (/^([0-9]{16})+$/.test(doc2.cedula)) {
                if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(doc2.fracc)) {
                  if (/^([0-9]{3,4})+$/.test(doc2.num)) {
                    if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.calle)) {
                      if (/^([0-9]{2})+$/.test(doc2.edad)) {
                        if (/^([0-9]{10})+$/.test(doc2.telefono)) {
                          if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(doc2.correo)) {
                            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.especialidad)) {
                              // if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(doc2.nconsultorio)) {
                                if (/^([0-9]{1,4})+$/.test(doc2.sueldo)) {
                                  if (/^([0-9]{1,4})+$/.test(doc2.iddepartamento)) {
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
      // } else {
      //   alert('Formato de Id Doctor inválido, por favor verificalo');
      //   return false;
      // }
    }
  }

  validarId(doc) {
    if (/^([0-9]{1,3})+$/.test(doc)) {
      alert('Datos Correctos');
      this.doctor.buscar1(doc);
    } else {
      alert('Formato de Id Doctor inválido, por favor verificalo');
      return false;
    }
  }

}
