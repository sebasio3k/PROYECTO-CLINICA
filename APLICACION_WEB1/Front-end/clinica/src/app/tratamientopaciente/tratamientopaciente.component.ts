import { Component, OnInit } from '@angular/core';
import {agregartratamientopaciente } from 'src/app/agregartratamientopaciente.model';
import {TratamientospacienteService } from '../services/tratamientopaciente.service';
@Component({
  selector: 'app-tratamientopaciente',
  templateUrl: './tratamientopaciente.component.html',
  styleUrls: ['./tratamientopaciente.component.css']
}) 
export class TratamientopacienteComponent implements OnInit {
 // model = new agregartratamientopaciente(1,null,null,null,null,'','',null);
 data = {
    idtratamiento : '',
    idpaciente	:	'',
    ncitas	:	'',
    iddoctor	:	'',
    modalidadpago	:	'',
    pagos	:	'',
   

};
  constructor( public tratamientop2: TratamientospacienteService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.tratamientop2.agregar(this.data);
  }

}




  



