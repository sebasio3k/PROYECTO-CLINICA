import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudsecretariacitas',
  templateUrl: './rudsecretariacitas.component.html',
  styleUrls: ['./rudsecretariacitas.component.css']
})
export class RudsecretariacitasComponent implements OnInit {

  datos = [];
  constructor() { }

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

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

}
