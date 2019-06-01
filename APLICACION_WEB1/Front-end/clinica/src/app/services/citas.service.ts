import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../interfaces/citas';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  cita: Citas[]=[];

  constructor( private http:HttpClient) { this.citas(); }
  public citas(){
    this.http.get('http://localhost:4200/assets/JSONS/citas.json').subscribe((resp: Citas[]) => {
      this.cita = resp;
    });
  }
}
