import { Component, OnInit } from '@angular/core';
import {agregartratamientopaciente } from 'src/app/agregartratamientopaciente.model';

@Component({
  selector: 'app-tratamientopaciente',
  templateUrl: './tratamientopaciente.component.html',
  styleUrls: ['./tratamientopaciente.component.css']
}) 
export class TratamientopacienteComponent implements OnInit {
  model = new agregartratamientopaciente(1,null,null,null,null,'','',null);
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }

}
