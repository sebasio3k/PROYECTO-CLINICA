import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  paciente: Pacientes[] = [];
  usuario1: Pacientes[] = [];

  constructor( private http: HttpClient) { }
  // public pacientes(){
  //   this.http.get('http://localhost:4200/assets/JSONS/pacientes.json').subscribe((resp: Pacientes[]) => {
  //     this.paciente = resp;
  //   });
  // }
  // INSERTAR
  public agregar(data) {
    this.http.post('http://localhost:3000/users/insertar', data).subscribe((resp: Pacientes[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  // MOSTRAR
  public buscar1(usuario) {
    this.http.get('http://localhost:3000/users/mostrar1/' + usuario).subscribe((resp: Pacientes[]) => {
      this.usuario1 = resp;
    });
  }
  // ACTUALIZAR
  public actualizarPaciente(paciente2) {
    this.http.post('http://localhost:3000/users/actualizar', paciente2).subscribe((resp: Pacientes[]) => {
      alert('Datos actualizados correctamente');
      document.location.reload();
     });
  }
  // ELIMINAR
  public eliminarPaciente(paciente2) {
    var opcion = confirm('¿Seguro de eliminar dicho registro?');
    if (opcion === true) {
    this.http.post('http://localhost:3000/users/eliminar', paciente2).subscribe((resp: Pacientes[]) => {
      alert('Datos Eliminados correctamente');
      document.location.reload();
     });
  }
}
}
