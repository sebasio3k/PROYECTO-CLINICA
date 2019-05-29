import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  paciente: Pacientes[]=[];

  constructor( private http:HttpClient) { this.pacientes(); } 
  public pacientes(){
    this.http.get('http://localhost:4200/assets/JSONS/pacientes.json').subscribe((resp: Pacientes[]) => {
      this.paciente = resp;
    });
  }
}
