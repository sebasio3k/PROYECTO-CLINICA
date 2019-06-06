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

  validarPromociones() {
    // Si estan vacios:
    if ( (this.data.descripcion === '') || (this.data.porcentajerebaja === '') ) {
      alert('Se requiere que todos los campos esten llenos!');
      return false;
    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,100})+$/.test(this.data.descripcion)) {
        if (/^([0-9]{1,4})+$/.test(this.data.porcentajerebaja)) {
          alert('Datos Correctos');
          this.promociones2.agregar(this.data);
        } else {
          alert('Formato de Monto inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Descripción inválido, por favor verificalo');
        return false;
      }
    }
  }

}
