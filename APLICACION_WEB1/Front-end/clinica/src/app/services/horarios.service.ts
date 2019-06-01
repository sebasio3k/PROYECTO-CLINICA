import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horarios } from '../interfaces/horarios';



@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  horario: Horarios[]=[];

  constructor( private http:HttpClient) { this.horarios(); }
  public horarios(){
    this.http.get('http://localhost:4200/assets/JSONS/horarios.json').subscribe((resp: Horarios[]) => {
      this.horario = resp;
    });
  }
}
