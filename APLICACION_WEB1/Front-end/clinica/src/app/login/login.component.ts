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
  inicioSesion() {
    if (this.usr === 'admin' && this.pass === '1') {
      alert('Datos Correctos');
      document.location.href = 'indexadmin';
    } else {
      if (this.usr === 'secre' && this.pass === '2') {
        document.location.href = 'indexsecretaria';
      } else {
        if (this.usr === 'conta' && this.pass === '3') {
          document.location.href = 'indexcontador';
        } else {
          if (this.usr === 'doc' && this.pass === '4') {
            document.location.href = 'indexdoctor';
          } else {
            alert('Datos incorrectos');
          }
        }
      }
    }
  }
  ngOnInit() {
  }

}
