import { Component, OnInit } from '@angular/core';
import { historial } from 'src/app/historial.model';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  model = new historial (1, 1,'','',1);

  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }

}
