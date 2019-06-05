import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../services/historial.service';

@Component({
  selector: 'app-ruddoctorhistorial',
  templateUrl: './ruddoctorhistorial.component.html',
  styleUrls: ['./ruddoctorhistorial.component.css']
})
export class RuddoctorhistorialComponent implements OnInit {

  datos = [];
  constructor(public historial: HistorialService) { }
  historial1 = {
    idpaciente : '',
    idcita : '',
    descripcioncita  : '',
    observaciones  : '',
    iddoctores  : ''
  };
  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpaciente: '1',
        idcita: 'Daniel Sebastian',
        descripcioncita: 'Hernandez',
        observaciones	: 'Ochoa',
        iddoctor: 'Hombre'
     },
     {
      idpaciente: '2',
      idcita: 'Daniel Sebastian',
      descripcioncita: 'Hernandez',
      observaciones	: 'Ochoa',
      iddoctor: 'Hombre'
     }

    ];
    console.log(this.datos);
  }
  buscar() {
    this.historial.buscar();
  }
  buscar1(his) {
    this.historial.buscar1(his);
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
      this.historial.buscar1(his);
    } else {
      alert('Formato de Id Historial inválido, por favor verificalo');
      return false;
    }
  }

}
