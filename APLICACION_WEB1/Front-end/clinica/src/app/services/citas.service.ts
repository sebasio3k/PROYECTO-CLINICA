import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../interfaces/citas';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  cita: Citas[] = [];

  constructor( private http: HttpClient) { }
  /*public citas(){
    this.http.get('http://localhost:4200/assets/JSONS/citas.json').subscribe((resp: Citas[]) => {
      this.cita = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/citas/insertar', data).subscribe((resp: Citas[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
}