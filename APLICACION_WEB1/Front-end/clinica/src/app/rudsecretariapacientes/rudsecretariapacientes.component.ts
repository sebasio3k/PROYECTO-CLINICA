import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-rudsecretariapacientes',
  templateUrl: './rudsecretariapacientes.component.html',
  styleUrls: ['./rudsecretariapacientes.component.css']
})
export class RudsecretariapacientesComponent implements OnInit {

  datos = [];
  constructor(public paciente: PacienteService) { }
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
    // this.datos = [
    //   {
    //     idpaciente: '1',
    //     nombre: 'Daniel Sebastian',
    //     apellidop: 'Hernandez',
    //     apellidom: 'Ochoa',
    //     genero: 'Hombre',
    //     fracc: 'Granja Graciela',
    //     num: '202',
    //     calle: 'Justo Sierra',
    //     edad: '22',
    //     telefono: '6188402944',
    //     correo: 'bastianhdezo@gmail.com'
    //  },
    //  {
    //   idpaciente: '2',
    //   nombre: 'Deyanira',
    //     apellidop: 'Campos',
    //     apellidom: 'Romero',
    //     genero: 'Hombre',
    //     fracc: 'Granja Graciela',
    //     num: '202',
    //     calle: 'Justo Sierra',
    //     edad: '22',
    //     telefono: '6188402944',
    //     correo: 'bastianhdezo@gmail.com'
    //  }

    // ];
    console.log(this.datos);
  }

  // BUSCAR
  buscar1(us) {
    this.paciente.buscar1(us);
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

  validarPaciente(paciente22) {
    if ((paciente22.nombre === '') || (paciente22.apaterno === '') || (paciente22.amaterno === '')
     || (paciente22.genero === '') || (paciente22.fracc === '') || (paciente22.num === '')
     || (paciente22.calle === '') || (paciente22.edad === '') || (paciente22.telefono === '')
     || (paciente22.correo === '') || (paciente22.idpaciente === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de paciente22.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.nombre)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.apaterno)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.amaterno)) {
            if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.genero)) {
              if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.fracc)) {
                if (/^([0-9]{1,4})+$/.test(paciente22.num)) {
                  if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(paciente22.calle)) {
                    if (/^([0-9]{2})+$/.test(paciente22.edad)) {
                      if (/^([0-9]{10})+$/.test(paciente22.telefono)) {
                        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(paciente22.correo)) {
                          alert('Datos Correctos');
                          this.paciente.actualizarPaciente(paciente22);
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
