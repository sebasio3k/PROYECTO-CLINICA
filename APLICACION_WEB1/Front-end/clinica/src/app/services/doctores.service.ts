import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctores } from '../interfaces/doctores';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctor: Doctores[]=[];

  constructor( private http:HttpClient) { this.doctores(); }
  public doctores(){
    this.http.get('http://localhost:4200/assets/JSONS/doctores.json').subscribe((resp: Doctores[]) => {
      this.doctor = resp;
    });
  }
}
