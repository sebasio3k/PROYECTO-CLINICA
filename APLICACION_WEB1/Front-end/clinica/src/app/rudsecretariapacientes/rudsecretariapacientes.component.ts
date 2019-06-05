import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-rudsecretariapacientes',
  templateUrl: './rudsecretariapacientes.component.html',
  styleUrls: ['./rudsecretariapacientes.component.css']
})
export class RudsecretariapacientesComponent implements OnInit {

  datos = [];
  constructor(public paciente:PersonalService) { }
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

  //BUSCAR
  buscar1(usuario){
    this.paciente.buscar1(usuario);
  }
  //ACTUALIZAR
  actualizarPaciente(paciente2){
    this.paciente.actualizarPaciente(paciente2);
  }
  //ELIMINAR
 eliminarPaciente(paciente2){

    this.paciente.eliminarPaciente(paciente2);
  }

  /*remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

}
