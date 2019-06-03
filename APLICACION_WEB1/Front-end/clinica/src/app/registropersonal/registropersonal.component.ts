import { Component, OnInit } from '@angular/core';
import { agregarpersonal } from 'src/app/agregarpersonal.model';
import { PersonalService } from '../services/personal.service';
@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.component.html',
  styleUrls: ['./registropersonal.component.css']
})
export class RegistropersonalComponent implements OnInit {
  //model = new agregarpersonal(1,1,'','','','','',null,'',null,null,'','',null,null);
  constructor(public personal2: PersonalService) { }
  data = {
    nombre:	'',
    ubicacion:	''

  };
  ngOnInit() {
  }
  /*
  get currentregistro(){
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.personal2.agregar(this.data);
  }
}




