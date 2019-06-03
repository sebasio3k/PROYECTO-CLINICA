import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../interfaces/historial';



@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historiaal: Historial[]=[];

  constructor( private http:HttpClient) { }

  public agregar(data) {
    this.http.post('http://localhost:3000/Historial/insertar', data).subscribe((resp: Historial[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  /*public historial(){
    this.http.get('http://localhost:4200/assets/JSONS/historial.json').subscribe((resp: Historial[]) => {
      this.historiaal = resp;
    });
  }*/
}
