import { Component, OnInit } from '@angular/core';
import {agregartratamiento } from 'src/app/agregartratamiento.model';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {
  model = new agregartratamiento(1,'','',null);
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }

}
