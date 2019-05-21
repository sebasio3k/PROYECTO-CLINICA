import { Component, OnInit } from '@angular/core';
import { agregarcitas } from 'src/app/agregarcita.model';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  model = new agregarcitas(1,null,'','',null,'',null,'');

  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }

}
