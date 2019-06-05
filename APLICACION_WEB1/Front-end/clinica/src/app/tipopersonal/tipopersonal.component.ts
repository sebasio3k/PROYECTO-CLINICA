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
}




