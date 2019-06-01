import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamientopaciente } from '../interfaces/tratamientopaciente';




@Injectable({
  providedIn: 'root'
})
export class TratamientospacienteService {
  tratamientoop: Tratamientopaciente[]=[];

  constructor( private http:HttpClient) { this.tratamientop(); }
  public tratamientop(){
    this.http.get('http://localhost:4200/assets/JSONS/tratamientopaciente.json').subscribe((resp: Tratamientopaciente[]) => {
      this.tratamientoop = resp;
    });
  }
}