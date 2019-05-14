import { Component, OnInit } from '@angular/core';
import { agregardoctor } from 'src/app/agregardoctor.model';

@Component({
  selector: 'app-registrodoctores',
  templateUrl: './registrodoctores.component.html',
  styleUrls: ['./registrodoctores.component.css']
})
export class RegistrodoctoresComponent implements OnInit {
  model = new agregardoctor(1,'','','','','','',null,'',null,null,'','','',null,null);
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }

}
