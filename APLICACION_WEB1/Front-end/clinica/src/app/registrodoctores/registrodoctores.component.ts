import { Component, OnInit } from '@angular/core';
import { agregardoctor } from 'src/app/agregardoctor.model';
import { DoctorService } from '../services/doctores.service';
@Component({
  selector: 'app-registrodoctores',
  templateUrl: './registrodoctores.component.html',
  styleUrls: ['./registrodoctores.component.css']
})
export class RegistrodoctoresComponent implements OnInit {
 // model = new agregardoctor(1, '', '', '', '', '', '', null, '', null, null, '', '', '', null, null);
 data = {

    Nombre : '',
    apaterno :'',
    amaterno : '',
    genero : '',  
  cedula : '',
  fracc : '',
  num : '',
  calle : '',
  edad : '',
  telefono : '',
  correo : '',
  especialidad : '',
  nconsultorio :'',
  sueldo :'',
  iddepartamento :''
  };

constructor( public doctor2: DoctorService) { }

  ngOnInit() {
  }
  /*
  get currentregistro() {
    return JSON.stringify(this.model);
  }*/
  agregar() {
    this.doctor2.agregar(this.data);
  }

}


