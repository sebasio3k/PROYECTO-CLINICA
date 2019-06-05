import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctores.service';
@Component({
  selector: 'app-rudadmindoctores',
  templateUrl: './rudadmindoctores.component.html',
  styleUrls: ['./rudadmindoctores.component.css']
})
export class RudadmindoctoresComponent implements OnInit {

  datos = [];
  constructor(public doctor:DoctorService) { }
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
  
  //BUSCAR
  buscar1(doc){
    this.doctor.buscar1(doc);
  }
  //ACTUALIZAR
  actualizarDoctor(doc2){
    this.doctor.actualizarDoctor(doc2);
  }
  //ELIMINAR
 eliminarDoctor(doc2){

    this.doctor.eliminarDoctor(doc2);
  }



  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

}