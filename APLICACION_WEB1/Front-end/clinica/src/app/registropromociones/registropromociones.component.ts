import { Component, OnInit } from '@angular/core';
import { promociones } from 'src/app/agregarpromocion.model';
import { PromocionesService } from '../services/promociones.service';

@Component({
  selector: 'app-registropromociones',
  templateUrl: './registropromociones.component.html',
  styleUrls: ['./registropromociones.component.css']
})
export class RegistropromocionesComponent implements OnInit {
 // model = new promociones(1,'',null);
 data = {
   
  descripcion	:	'',
  porcentajerebaja	:	''
};
  constructor(public promociones2: PromocionesService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.promociones2.agregar(this.data);
  }

}
