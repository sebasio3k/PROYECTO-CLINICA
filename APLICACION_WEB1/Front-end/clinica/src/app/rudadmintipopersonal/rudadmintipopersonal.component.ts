import { Component, OnInit } from '@angular/core';
import { TipopersonalService } from '../services/tipopersonal.service';

@Component({
  selector: 'app-rudadmintipopersonal',
  templateUrl: './rudadmintipopersonal.component.html',
  styleUrls: ['./rudadmintipopersonal.component.css']
})
export class RudadmintipopersonalComponent implements OnInit {

  datos = [];
  constructor(public tipopersonal:TipopersonalService) { }
  tipopersonal2 ={
    idtipo: '',
    nombretipo : ''
   
   
  }
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

  //BUSCAR
buscar1(tper){
  this.tipopersonal.buscar1(tper);
}
//ACTUALIZAR
actualizarTipopersonal(tper2){
  this.tipopersonal.actualizarTipopersonal(tper2);
}
//ELIMINAR
eliminarTipopersonal(tper2){

  this.tipopersonal.eliminarTipopersonal(tper2);
}

 /* remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }*/

}
