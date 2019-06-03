import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  paciente: Pacientes[] = [];
  usuario1:Pacientes[]=[];

  constructor( private http: HttpClient) { }
  // public pacientes(){
  //   this.http.get('http://localhost:4200/assets/JSONS/pacientes.json').subscribe((resp: Pacientes[]) => {
  //     this.paciente = resp;
  //   });
  // }
  public agregar(data) {
    this.http.post('http://localhost:3000/users/insertar', data).subscribe((resp: Pacientes[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  public buscar1(usuario){
    this.http.get("http://localhost:3000/users/mostrar1/"+usuario).subscribe((resp:Pacientes[])=>{
      this.usuario1=resp;
    });
  }
  public actualizarPaciente(paciente2){
    this.http.post("http://localhost:3000/users/actualizar",paciente2).subscribe((resp: Pacientes[])=>{
      alert("Datos actualizados correctamente");
      document.location.reload();
     });
  }
}
