import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruddoctorhistorial',
  templateUrl: './ruddoctorhistorial.component.html',
  styleUrls: ['./ruddoctorhistorial.component.css']
})
export class RuddoctorhistorialComponent implements OnInit {

  datos = [];
  constructor() { }

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

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

}
