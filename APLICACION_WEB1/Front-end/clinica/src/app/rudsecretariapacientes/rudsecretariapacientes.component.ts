import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rudsecretariapacientes',
  templateUrl: './rudsecretariapacientes.component.html',
  styleUrls: ['./rudsecretariapacientes.component.css']
})
export class RudsecretariapacientesComponent implements OnInit {

  datos = [];
  constructor() { }

  ngOnInit() {
    this.testBuildDatas();
  }

  testBuildDatas() {
    this.datos = [
      {
        idpaciente: '1',
        nombre: 'Daniel Sebastian',
        apellidop: 'Hernandez',
        apellidom: 'Ochoa',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com'
     },
     {
      idpaciente: '2',
      nombre: 'Deyanira',
        apellidop: 'Campos',
        apellidom: 'Romero',
        genero: 'Hombre',
        fracc: 'Granja Graciela',
        num: '202',
        calle: 'Justo Sierra',
        edad: '22',
        telefono: '6188402944',
        correo: 'bastianhdezo@gmail.com'
     }

    ];
    console.log(this.datos);
  }

  remove(id) {
    this.datos = this.datos.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
  }

}
