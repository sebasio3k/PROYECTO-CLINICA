import { Component, OnInit } from '@angular/core';
import { promociones } from 'src/app/agregarpromocion.model';

@Component({
  selector: 'app-registropromociones',
  templateUrl: './registropromociones.component.html',
  styleUrls: ['./registropromociones.component.css']
})
export class RegistropromocionesComponent implements OnInit {
  model = new promociones(1,'',null);
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }
}
