import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass;
  usr;
  constructor() { }
  inicioSesion(){
    if(this.usr=="admin" && this.pass=="1234"){
      alert("Datos Correctos");
      document.location.href="registro";
    }else{
      alert("Datos incorrectos");
    }
  }
  ngOnInit() {
  }

}
