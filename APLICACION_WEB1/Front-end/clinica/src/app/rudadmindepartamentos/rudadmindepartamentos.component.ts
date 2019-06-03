import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadmindepartamentos',
  templateUrl: './rudadmindepartamentos.component.html',
  styleUrls: ['./rudadmindepartamentos.component.css']
})
export class RudadmindepartamentosComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        iddepartamento: '1',
        nombre: 'Daniel Sebastian',
        ubicacion: 'Hernandez',
     },
     {
      iddepartamento: '2',
      nombre: 'Daniel Sebastian',
      ubicacion: 'Hernandez',
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
