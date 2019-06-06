import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';
@Component({
  selector: 'app-rudadminpersonal',
  templateUrl: './rudadminpersonal.component.html',
  styleUrls: ['./rudadminpersonal.component.css']
})
export class RudadminpersonalComponent implements OnInit {

  datos = [];
  // pers;
  constructor(public personal: PersonalService) { }

  personal2 = {
    idpersonal : '',
    idtipo: '',
    nombre: '',
    apaterno: '',
    amaterno: '',
    genero: '',
    fracc: '',
    Num: '',
    calle: '',
    edad: '',
    telefono: '',
    correo: '',
    cedula: '',
    iddepartamento: '',
    sueldo : ''
};

  ngOnInit() {
    this.testBuildpersonal2s();
  }

  testBuildpersonal2s() {
    // this.datos = [
    //   {
    //     idpersonal: '1',
    //     idtipo: 'Daniel Sebastian',
    //     nombre: 'Hernandez',
    //     apaterno: 'Ochoa',
    //     amaterno: 'Hombre',
    //     genero: 'Hombre',
    //     fracc: 'Granja Graciela',
    //     num: '202',
    //     calle: 'Justo Sierra',
    //     edad: '22',
    //     telefono: '6188402944',
    //     correo: 'bastianhdezo@gmail.com',
    //     cedula: '202',
    //     iddepartamento: '202',
    //     sueldo: '202'
    //  },
    //  {
    //   idpersonal: '1',
    //   idtipo: 'Daniel Sebastian',
    //   nombre: 'Hernandez',
    //   apaterno: 'Ochoa',
    //   amaterno: 'Hombre',
    //   genero: 'Hombre',
    //   fracc: 'Granja Graciela',
    //   num: '202',
    //   calle: 'Justo Sierra',
    //   edad: '22',
    //   telefono: '6188402944',
    //   correo: 'bastianhdezo@gmail.com',
    //   cedula: '202',
    //   iddepartamento: '202',
    //   sueldo: '202'
    //  }

    // ];
    // console.log(this.datos);
  }

  // BUSCAR
  buscar1(personal) {
    this.personal.buscar1(personal);
  }
  // ACTUALIZAR
  actualizarPersonal(personal2) {
    this.personal.actualizarPaciente(personal2);
  }
  // ELIMINAR
 eliminarPersonal(personal2) {

    this.personal.eliminarPaciente(personal2);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  validarPersonal(personal23) {
    console.log(personal23);
    // Si estan vacios:
    if ( (personal23.idtipo === '') || (personal23.nombre === '') || (personal23.apaterno === '')
      || (personal23.amaterno === '') || (personal23.genero === '') || (personal23.cedula === '')
      || (personal23.fracc === '') || (personal23.Num === '') || (personal23.calle === '')
      || (personal23.edad === '') || (personal23.telefono === '') || (personal23.correo === '')
      || (personal23.sueldo === '') || (personal23.iddepartamento === '')) {
      //   if ( (personal23.idtipo === '') || (personal23.nombre === '') || (personal23.apaterno === '')
      // || (personal23.amaterno === '') || (personal23.genero === '') || (personal23.cedula === '')
      // || (personal23.fracc === '') || (personal23.Num === '') || (personal23.calle === '')
      // || (personal23.edad === '') || (personal23.telefono === '') || (personal23.correo === '')
      // || (personal23.sueldo === '') || (personal23.iddepartamento === '') || (personal23.idpersonal === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      // if (/^([0-9]{1,3})+$/.test(personal23.idpersonal)) {
        if (/^([0-9]{1,3})+$/.test(personal23.idtipo)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(personal23.nombre)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(personal23.apaterno)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(personal23.amaterno)) {
                if (/^(Masculono|Femenino|masculino|femenino)*$/.test(personal23.genero)) {
                  if (/^([0-9]{16})+$/.test(personal23.cedula)) {
                    if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(personal23.fracc)) {
                      if (/^([0-9]{3,4})+$/.test(personal23.Num)) {
                        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(personal23.calle)) {
                          if (/^([0-9]{2})+$/.test(personal23.edad)) {
                            if (/^([0-9]{10})+$/.test(personal23.telefono)) {
                              if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(personal23.correo)) {
                                if (/^([0-9]{1,4})+$/.test(personal23.sueldo)) {
                                  if (/^([0-9]{1,3})+$/.test(personal23.iddepartamento)) {
                                    // alert('Datos Correctos');
                                    this.personal.actualizarPaciente(personal23);
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
          alert('Formato de Id Tipo inválido, por favor verificalo');
          return false;
        }
      // } else {
      //   alert('Formato de Id Personal Inválido, por favor verificalo');
      //   return false;
      // }
    }
  }

  validarId(personal) {
    if (/^([0-9]{1,4})+$/.test(personal)) {
      // alert('Datos Correctos');
      this.personal.buscar1(personal);
    } else {
      alert('Formato de Id Personal inválido, por favor verificalo');
      return false;
    }
  }

}
