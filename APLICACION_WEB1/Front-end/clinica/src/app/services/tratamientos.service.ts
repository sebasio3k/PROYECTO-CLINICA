import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from '../interfaces/tratamientos';



@Injectable({
  providedIn: 'root'
})
export class TratamientosService {
  tratamientoo: Tratamiento[]=[];

  constructor( private http:HttpClient) { this.tratamiento(); }
  public tratamiento(){
    this.http.get('http://localhost:4200/assets/JSONS/tratamientos.json').subscribe((resp: Tratamiento[]) => {
      this.tratamientoo = resp;
    });
  }
}
