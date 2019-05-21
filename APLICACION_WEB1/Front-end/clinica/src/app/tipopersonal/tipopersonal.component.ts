import { Component, OnInit } from '@angular/core';
import {tipopersonal} from  'src/app/agregartipopersonal.model';
@Component({
  selector: 'app-tipopersonal',
  templateUrl: './tipopersonal.component.html',
  styleUrls: ['./tipopersonal.component.css']
})
export class TipopersonalComponent implements OnInit {
  model = new tipopersonal(1,'');
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }
}
