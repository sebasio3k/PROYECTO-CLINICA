import { Component, OnInit } from '@angular/core';
import { historial } from 'src/app/historial.model';
import { HistorialService } from '../services/historial.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  //model = new historial (1, 1,'','',1);
  data = {
    idpaciente : '',
    idcita	: '',
    descripcioncita	: '',
    observaciones	: '',
    iddoctor : ''
  };
  constructor(public historial2: HistorialService) { }

  ngOnInit() {
  }
  /*get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.historial2.agregar(this.data);
  }

}




