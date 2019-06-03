import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadminhorarios',
  templateUrl: './rudadminhorarios.component.html',
  styleUrls: ['./rudadminhorarios.component.css']
})
export class RudadminhorariosComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idhorario: '1',
        iddoctor: 'Daniel Sebastian',
        nconsultorio: 'Hernandez',
        hora: 'Ochoa'
     },
     {
      idhorario: '2',
      iddoctor: 'Daniel Sebastian',
      nconsultorio: 'Hernandez',
      hora: 'Ochoa'
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
