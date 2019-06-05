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
    this.datos = [
      {
        idpersonal: '1',
        idtipo: 'Daniel Sebastian',
        nombre: 'Hernandez',
        apaterno: 'Ochoa',
        amaterno: 'Hombre',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com',
        cedula: '202',
        iddepartamento: '202',
        sueldo: '202'
     },
     {
      idpersonal: '1',
      idtipo: 'Daniel Sebastian',
      nombre: 'Hernandez',
      apaterno: 'Ochoa',
      amaterno: 'Hombre',
      genero: 'Hombre',
      fracc: 'Granja Graciela',
      num: '202',
      calle: 'Justo Sierra',
      edad: '22',
      telefono: '6188402944',
      correo: 'bastianhdezo@gmail.com',
      cedula: '202',
      iddepartamento: '202',
      sueldo: '202'
     }

    ];
    console.log(this.datos);
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

  validarPersonal(personal2) {

    // Si estan vacios:
    if ( (this.personal2.idtipo === '') || (this.personal2.nombre === '') || (this.personal2.apaterno === '')
      || (this.personal2.amaterno === '') || (this.personal2.genero === '') || (this.personal2.cedula === '')
      || (this.personal2.fracc === '') || (this.personal2.Num === '') || (this.personal2.calle === '')
      || (this.personal2.edad === '') || (this.personal2.telefono === '') || (this.personal2.correo === '')
      || (this.personal2.sueldo === '') || (this.personal2.iddepartamento === '') || (this.personal2.idpersonal === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.personal2.idpersonal)) {
      if (/^([0-9]{1,4})+$/.test(this.personal2.idtipo)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.personal2.nombre)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.personal2.apaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.personal2.amaterno)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.personal2.genero)) {
                if (/^([A-Za-z\sáéíóú]{2,16})+$/.test(this.personal2.cedula)) {
                  if (/^([A-Za-z\sáéíóú]{2,20})+$/.test(this.personal2.fracc)) {
                    if (/^([0-9]{3,4})+$/.test(this.personal2.Num)) {
                      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.personal2.calle)) {
                        if (/^([0-9]{2})+$/.test(this.personal2.edad)) {
                          if (/^([0-9]{10})+$/.test(this.personal2.telefono)) {
                            if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.personal2.correo)) {
                              if (/^([0-9]{1,4})+$/.test(this.personal2.sueldo)) {
                                if (/^([0-9]{1,4})+$/.test(this.personal2.iddepartamento)) {
                                  alert('Datos Correctos');
                                  this.personal.actualizarPaciente(personal2);
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
    } else {
      alert('Formato de Id Personal Inválido, por favor verificalo');
      return false;
    }
    }
  }

  validarId(personal) {
    if (/^([0-9]{1,4})+$/.test(personal)) {
      alert('Datos Correctos');
      this.personal.buscar1(personal);
    } else {
      alert('Formato de Id Personal inválido, por favor verificalo');
      return false;
    }
  }

}
