import { Component, OnInit } from '@angular/core';
import { registro } from 'src/app/registro.model';
import { PacienteService } from '../services/paciente.service';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
// model = new registro(1,'','','','','',null,'',null,null,'');

  data = {
    nombre:	'',
    apaterno:	'',
    amaterno:	'',
    genero:	'',
    fracc:	'',
    num:	'',
    calle:	'',
    edad:	'',
    telefono:	'',
    correo:	''
  };

  constructor( public paciente2: PacienteService) { }

  ngOnInit() {
  }



  agregar() {
    this.paciente2.agregar(this.data);
  }
  // get currentregistro(){
  //   return JSON.stringify(this.model);
  // }


}
