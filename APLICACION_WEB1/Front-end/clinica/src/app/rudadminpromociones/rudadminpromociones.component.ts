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

  validarPromociones(promo2) {

    // Si estan vacios:
    if ((this.promocion2.idpromocion === '') || (this.promocion2.descripcion === '') || (this.promocion2.porcentajerebaja === '') ) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.promocion2.idpromocion)) {
        if (/^([0-9]{1,4})+$/.test(this.promocion2.descripcion)) {
          if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.promocion2.porcentajerebaja)) {
            alert('Datos Correctos');
            this.promocion.actualizarPromocion(promo2);
          } else {
            alert('Formato de Porcentaje inválido, por favor verificalo');
            return false;
          }
        } else {
          alert('Formato de Descripcion inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Id Promoción inválido, por favor verificalo');
        return false;
      }
    }
  }

  validarId(promo) {
    if (/^([0-9]{1,4})+$/.test(promo)) {
      alert('Datos Correctos');
      this.promocion.buscar1(promo);
    } else {
      alert('Formato de Id Promocion inválido, por favor verificalo');
      return false;
    }
  }

}
