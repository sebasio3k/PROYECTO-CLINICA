import { Component, OnInit } from '@angular/core';
import { agregarpersonal } from 'src/app/agregarpersonal.model';

@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.component.html',
  styleUrls: ['./registropersonal.component.css']
})
export class RegistropersonalComponent implements OnInit {
  model = new agregarpersonal(1,1,'','','','','',null,'',null,null,'','',null,null);
  constructor() { }

  ngOnInit() {
  }
  get currentregistro(){
    return JSON.stringify(this.model);
  }


}
