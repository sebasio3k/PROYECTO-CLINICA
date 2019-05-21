import { Component, OnInit } from '@angular/core';
import { horarios } from 'src/app/horarios.model';
@Component({
  selector: 'app-registrohorario',
  templateUrl: './registrohorario.component.html',
  styleUrls: ['./registrohorario.component.css']
})
export class RegistrohorarioComponent implements OnInit {
  model = new horarios(1,'','');
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }
}
