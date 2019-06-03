import { Component, OnInit } from '@angular/core';
import { agregarcitas } from 'src/app/agregarcita.model';
import { CitasService } from '../services/citas.service';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  data = {
    idpaciente:	'',
    hora: '',
    fecha:	'',
    iddoctor:	'',
    nconsultorio:	'',
    precio:	'',
    estatus:	'',
  };

  constructor(public citas2: CitasService) { }

  ngOnInit() {
  }
  /*get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.citas2.agregar(this.data);
  }

}




