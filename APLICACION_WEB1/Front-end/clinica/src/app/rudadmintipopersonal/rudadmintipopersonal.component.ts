import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudadmintipopersonal',
  templateUrl: './rudadmintipopersonal.component.html',
  styleUrls: ['./rudadmintipopersonal.component.css']
})
export class RudadmintipopersonalComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idtipo: '1',
        nombretipo: 'Daniel Sebastian'
     },
     {
      idtipo: '2',
        nombretipo: 'Daniel Sebastian'
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
