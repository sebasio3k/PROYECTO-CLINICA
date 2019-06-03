import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctores } from '../interfaces/doctores';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctor: Doctores[]=[];

  constructor( private http:HttpClient) { }
  /*public doctores(){
    this.http.get('http://localhost:4200/assets/JSONS/doctores.json').subscribe((resp: Doctores[]) => {
      this.doctor = resp;
    });
  }*/

  public agregar(data) {
    this.http.post('http://localhost:3000/doctores/insertar', data).subscribe((resp: Doctores[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
}

