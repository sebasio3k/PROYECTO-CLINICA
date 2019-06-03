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

  ngOnInit() {
  }

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


  validarLogin() {

    if ((this.usr === '') || (this.pass === '')) {
      alert('Se requiere que todos los campos esten llenos!');

    } else {
      /*VALIDA QUE EL formato de this.usr SEA VALIDO*/
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.usr)) {
        if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(this.pass)) {

          if (this.usr === 'admin@gmail.com' && this.pass === '12345678sS') {
            alert('Datos Correctos');
            document.location.href = 'indexadmin';
          } else {
            if (this.usr === 'secre@gmail.com' && this.pass === '12345678sS') {
              document.location.href = 'indexsecretaria';
            } else {
              if (this.usr === 'conta@gmail.com' && this.pass === '12345678sS') {
                document.location.href = 'indexcontador';
              } else {
                if (this.usr === 'doc@gmail.com' && this.pass === '12345678sS') {
                  document.location.href = 'indexdoctor';
                } else {
                  alert('Datos incorrectos');
                }
              }
            }
          }

        } else {
          alert('Formato de Contaseña inválido, por favor verificalo');
        }
      } else {
        alert('Formato de correo inválido, por favor verificalo');
      }
    }
  }

}
