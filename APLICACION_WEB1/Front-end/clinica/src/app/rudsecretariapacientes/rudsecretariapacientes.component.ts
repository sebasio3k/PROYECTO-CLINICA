import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-rudsecretariapacientes',
  templateUrl: './rudsecretariapacientes.component.html',
  styleUrls: ['./rudsecretariapacientes.component.css']
})
export class RudsecretariapacientesComponent implements OnInit {

  datos = [];
  constructor(public paciente: PersonalService) { }
  paciente2 = {
        idpaciente: '',
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
  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpaciente: '1',
        nombre: 'Daniel Sebastian',
        apellidop: 'Hernandez',
        apellidom: 'Ochoa',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com'
     },
     {
      idpaciente: '2',
      nombre: 'Deyanira',
        apellidop: 'Campos',
        apellidom: 'Romero',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com'
     }

    ];
    console.log(this.datos);
  }

  // BUSCAR
  buscar1(usuario) {
    this.paciente.buscar1(usuario);
  }
  // ACTUALIZAR
  actualizarPaciente(paciente2) {
    this.paciente.actualizarPaciente(paciente2);
  }
  // ELIMINAR
  eliminarPaciente(paciente2) {
    this.paciente.eliminarPaciente(paciente2);
  }

  /*remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

  validarPaciente(paciente2) {
    if ((this.paciente2.nombre === '') || (this.paciente2.apaterno === '') || (this.paciente2.amaterno === '')
     || (this.paciente2.genero === '') || (this.paciente2.fracc === '') || (this.paciente2.num === '')
     || (this.paciente2.calle === '') || (this.paciente2.edad === '') || (this.paciente2.telefono === '')
     || (this.paciente2.correo === '') || (this.paciente2.idpaciente === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.paciente2.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.apaterno)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.amaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.genero)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.fracc)) {
                if (/^([0-9]{4})+$/.test(this.paciente2.num)) {
                  if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.paciente2.calle)) {
                    if (/^([0-9]{2})+$/.test(this.paciente2.edad)) {
                      if (/^([0-9]{10})+$/.test(this.paciente2.telefono)) {
                        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.paciente2.correo)) {
                          alert('Datos Correctos');
                          this.paciente.actualizarPaciente(paciente2);
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

  validarId(usuario) {
    if (/^([0-9]{1,4})+$/.test(usuario)) {
      alert('Datos Correctos');
      this.paciente.buscar1(usuario);
    } else {
      alert('Formato de Id Paciente inválido, por favor verificalo');
      return false;
    }
  }

}
