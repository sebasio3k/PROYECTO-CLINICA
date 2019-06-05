import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-rudsecretariacitas',
  templateUrl: './rudsecretariacitas.component.html',
  styleUrls: ['./rudsecretariacitas.component.css']
})
export class RudsecretariacitasComponent implements OnInit {

  datos = [];
  constructor(public citas: CitasService) { }

      cita2 = {
        idcita : '',
        idpaciente  : '',
        hora  : '',
        fecha  : '',
        iddoctor  : '',
        nconsultorio  : '',
        precio : '',
        estatus : ''
      };

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idcita: '1',
        idpaciente: 'Daniel Sebastian',
        fecha: 'Hernandez',
        iddoctor: 'Ochoa',
        nconsultorio: 'Hombre',
        precio: 'Granja Graciela',
        estatus: '202'
     },
     {
      idcita: '2',
      idpaciente: 'Daniel Sebastian',
      fecha: 'Hernandez',
      iddoctor: 'Ochoa',
      nconsultorio: 'Hombre',
      precio: 'Granja Graciela',
      estatus: '202'
     }

    ];
    console.log(this.datos);
  }
// BUSCAR
buscar1(cita) {
  this.citas.buscar1(cita);
}
// ACTUALIZAR
actualizarCita(cita2) {
  this.citas.actualizarCita(cita2);
}
// ELIMINAR
eliminarCita(cita2) {
  this.citas.eliminarCita(cita2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

  validarCita(cita22) {
    // Si estan vacios:
    if ((cita22.idpaciente === '') || (cita22.hora === '')  || (cita22.fecha === '')
    || (cita22.iddoctor === '') || (cita22.nconsultorio === '')  || (cita22.precio === '')
    || (cita22.estatus === '') || (cita22.idcita === '') ) {
      alert('Se requiere que todos los campos esten llenos');
      return false;
    } else {// si no
      /*VALIDA QUE EL formato de correo SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(cita22.idcita)) {
      if (/^([0-9]{1,4})+$/.test(cita22.idpaciente)) {
        if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(cita22.hora)) {
          if (/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(cita22.fecha)) {
            if (/^([0-9]{1,4})+$/.test(cita22.iddoctor)) {
            // if (regcontra.test(nconsultorio)) {
              if (/^\d{1,3}(\.\d{2})?$/.test(cita22.precio)) {
                // if (tyc.test(estatus)) {
                //   alert('Selecciona el estatus');
                // } else {
                    alert('Datos Correctos');
                    this.citas.actualizarCita(cita22);

                    // }
              } else {
                alert('Formato de precio Inválido');
                return false;
              }
            // } else {

            // }
            } else {
                alert('Formato de Id Doctor Inválido');
                return false;
            }
          } else {
            alert('Formato de Fecha Inválido');
            return false;
          }
        } else {
          alert('Formato de Hora Inválido');
          return false;
        }
      } else {
        alert('Formato de Id Paciente Inválido');
        return false;
      }
    } else {
      alert('Formato de Id Cita Inválido');
      return false;
    }
    }
  }

  validarId(his) {
    if (/^([0-9]{1,4})+$/.test(his)) {
      alert('Datos Correctos');
      this.citas.buscar1(his);
    } else {
      alert('Formato de Id Cita inválido, por favor verificalo');
      return false;
    }
  }

}
