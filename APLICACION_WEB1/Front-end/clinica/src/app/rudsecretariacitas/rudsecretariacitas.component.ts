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

  validarCita(cita2) {
    // Si estan vacios:
    if ((this.cita2.idpaciente === '') || (this.cita2.hora === '')  || (this.cita2.fecha === '')
    || (this.cita2.iddoctor === '') || (this.cita2.nconsultorio === '')  || (this.cita2.precio === '')
    || (this.cita2.estatus === '') || (this.cita2.idcita === '') ) {
      alert('Se requiere que todos los campos esten llenos');
      return false;
    } else {// si no
      /*VALIDA QUE EL formato de correo SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.cita2.idcita)) {
      if (/^([0-9]{1,4})+$/.test(this.cita2.idpaciente)) {
        if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(this.cita2.hora)) {
          if (/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(this.cita2.fecha)) {
            if (/^([0-9]{1,4})+$/.test(this.cita2.iddoctor)) {
            // if (regcontra.test(this.nconsultorio)) {
              if (/^\d{1,3}(\.\d{2})?$/.test(this.cita2.precio)) {
                // if (tyc.test(this.estatus)) {
                //   alert('Selecciona el estatus');
                // } else {
                    alert('Datos Correctos');
                    this.citas.actualizarCita(cita2);

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
      this.citas.buscar2(his);
    } else {
      alert('Formato de Id Cita inválido, por favor verificalo');
      return false;
    }
  }

}
