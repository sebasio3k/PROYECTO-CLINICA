import { Component, OnInit } from '@angular/core';
import { TipopersonalService } from '../services/tipopersonal.service';

@Component({
  selector: 'app-rudadmintipopersonal',
  templateUrl: './rudadmintipopersonal.component.html',
  styleUrls: ['./rudadmintipopersonal.component.css']
})
export class RudadmintipopersonalComponent implements OnInit {

  datos = [];
  constructor(public tipopersonal: TipopersonalService) { }

  tipopersonal2 = {
    idtipo: '',
    nombretipo : ''
  };

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idtipo: '1',
        nombretipo: 'Daniel Sebastian'
     },
     {
      idtipo: '2',
        nombretipo: 'Daniel Sebastian'
     }

    ];
    console.log(this.datos);
  }

  // BUSCAR
  buscar1(tper) {
    this.tipopersonal.buscar1(tper);
  }
  // ACTUALIZAR
  actualizarTipopersonal(tper2) {
    this.tipopersonal.actualizarTipopersonal(tper2);
  }
  // ELIMINAR
  eliminarTipopersonal(tper2) {
    this.tipopersonal.eliminarTipopersonal(tper2);
  }

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

  validarTipopersonal(tper2) {
    // Si estan vacios:
    if ((this.tipopersonal2.idtipo === '') || (this.tipopersonal2.nombretipo === '') ) {
      alert('Se requiere que todos los campos esten llenos!');
    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([0-9]{1,4})+$/.test(this.tipopersonal2.idtipo)) {
        if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.tipopersonal2.nombretipo)) {
          alert('Datos Correctos');
          this.tipopersonal.actualizarTipopersonal(tper2);
        } else {
          alert('Formato de Nombre inválido, por favor verificalo');
          return false;
        }
      } else {
        alert('Formato de Id inválido, por favor verificalo');
        return false;
      }
    }
  }

  validarId(tper) {
    if (/^([0-9]{1,4})+$/.test(tper)) {
      alert('Datos Correctos');
      this.tipopersonal.buscar1(tper);
    } else {
      alert('Formato de Id Tipo Personal inválido, por favor verificalo');
      return false;
    }
  }

}
