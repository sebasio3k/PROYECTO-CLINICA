import { Component, OnInit } from '@angular/core';
import { PromocionesService } from '../services/promociones.service';

@Component({
  selector: 'app-rudadminpromociones',
  templateUrl: './rudadminpromociones.component.html',
  styleUrls: ['./rudadminpromociones.component.css']
})
export class RudadminpromocionesComponent implements OnInit {

  datos = [];
  constructor(public promocion: PromocionesService) { }
  promocion2 = {
    idpromocion : '',
    descripcion : '',
    porcentajerebaja  : ''
  };
  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpromocion: '1',
        descripcion: 'Daniel Sebastian',
        porcentajerebaja: 'Hernandez'
     },
     {
      idpromocion: '2',
      descripcion: 'Daniel Sebastian',
      porcentajerebaja: 'Hernandez'
     }

    ];
    console.log(this.datos);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

// BUSCAR
buscar1(promo) {
  this.promocion.buscar1(promo);
}
// ACTUALIZAR
actualizarPromocion(promo2) {
  this.promocion.actualizarPromocion(promo2);
}
// ELIMINAR
eliminarPromocion(promo2) {

  this.promocion.eliminarPromocion(promo2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/



}
