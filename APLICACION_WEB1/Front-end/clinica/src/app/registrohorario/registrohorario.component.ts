import { Component, OnInit } from '@angular/core';
import { horarios } from 'src/app/horarios.model';
import {HorarioService} from '../services/horarios.service';
@Component({
  selector: 'app-registrohorario',
  templateUrl: './registrohorario.component.html',
  styleUrls: ['./registrohorario.component.css']
})
export class RegistrohorarioComponent implements OnInit {
 // model = new horarios(1,'','');
 data = {
   
  iddoctor	:	'',
  nconsultorio	:	'',
  hora :	''
};
  constructor(public horario2: HorarioService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.horario2.agregar(this.data);
  }

}