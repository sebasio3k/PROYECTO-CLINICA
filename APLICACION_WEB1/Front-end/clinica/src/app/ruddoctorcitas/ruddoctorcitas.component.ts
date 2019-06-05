import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-ruddoctorcitas',
  templateUrl: './ruddoctorcitas.component.html',
  styleUrls: ['./ruddoctorcitas.component.css']
})
export class RuddoctorcitasComponent implements OnInit {

  datos = [];
  constructor(public citas: CitasService) { }
  citas2 = {
    idcita : '',
    idpaciente : '',
    hora : '',
    fecha : '',
    iddoctor : '',
    nconsultorio : '',
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
  buscar() {
    this.citas.buscar();
  }
  buscar2(his) {
    this.citas.buscar2(his);
  }
  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
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
