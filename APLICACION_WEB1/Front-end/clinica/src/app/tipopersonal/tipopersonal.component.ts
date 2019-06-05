import { Component, OnInit } from '@angular/core';
import {tipopersonal} from 'src/app/agregartipopersonal.model';
import { TipopersonalService } from '../services/tipopersonal.service';
@Component({
  selector: 'app-tipopersonal',
  templateUrl: './tipopersonal.component.html',
  styleUrls: ['./tipopersonal.component.css']
})
export class TipopersonalComponent implements OnInit {
 // model = new tipopersonal(1,'');
 data = {
  nombretipo	:	''
};
  constructor(public tipopersonal2: TipopersonalService) { }

  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.tipopersonal2.agregar(this.data);
  }

  validarTipopersonal() {
    // Si estan vacios:
    if ( (this.data.nombretipo === '') ) {
      alert('Se requiere que todos los campos esten llenos!');
    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^([A-Za-z\sáéíóú]{2,15})+$/.test(this.data.nombretipo)) {
          alert('Datos Correctos');
          this.tipopersonal2.agregar(this.data);
        } else {
          alert('Formato de Nombre inválido, por favor verificalo');
          return false;
        }
    }
  }

}
