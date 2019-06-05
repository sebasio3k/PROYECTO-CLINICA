import { Component, OnInit } from '@angular/core';
import {agregartratamiento } from 'src/app/agregartratamiento.model';
import { TratamientosService } from '../services/tratamientos.service';
@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {
 // model = new agregartratamiento(1,'','',null);
 
 data = {
Nombre :	'',
descripcion :	'',
precio :	''
 
};
  constructor(public tratamiento2: TratamientosService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.tratamiento2.agregar(this.data);
  }
}
