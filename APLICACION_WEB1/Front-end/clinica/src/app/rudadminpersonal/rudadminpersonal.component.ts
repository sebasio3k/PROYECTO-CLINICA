import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../services/personal.service';
@Component({
  selector: 'app-rudadminpersonal',
  templateUrl: './rudadminpersonal.component.html',
  styleUrls: ['./rudadminpersonal.component.css']
})
export class RudadminpersonalComponent implements OnInit {

  datos = [];
  constructor(public personal:PersonalService) { }
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
    this.testBuildDatas();
  }

  testBuildDatas() {
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

  //BUSCAR
  buscar1(personal){
    this.personal.buscar1(personal);
  }
  //ACTUALIZAR
  actualizarPersonal(personal2){
    this.personal.actualizarPaciente(personal2);
  }
  //ELIMINAR
 eliminarPersonal(personal2){

    this.personal.eliminarPaciente(personal2);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

}
