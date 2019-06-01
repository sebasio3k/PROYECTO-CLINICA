import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../interfaces/historial';



@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historiaal: Historial[]=[];

  constructor( private http:HttpClient) { this.historial(); }
  public historial(){
    this.http.get('http://localhost:4200/assets/JSONS/historial.json').subscribe((resp: Historial[]) => {
      this.historiaal = resp;
    });
  }
}