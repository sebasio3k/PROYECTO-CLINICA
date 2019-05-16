import { Component, OnInit } from '@angular/core';
import { agregardepartamento } from 'src/app/agregardepartamento.model';
@Component({
  selector: 'app-registrodepartamento',
  templateUrl: './registrodepartamento.component.html',
  styleUrls: ['./registrodepartamento.component.css']
})
export class RegistrodepartamentoComponent implements OnInit {
  model = new agregardepartamento(1, '', '');
  constructor() { }

  ngOnInit() {
  }
  get currentregistro() {
    return JSON.stringify(this.model);
  }
}
