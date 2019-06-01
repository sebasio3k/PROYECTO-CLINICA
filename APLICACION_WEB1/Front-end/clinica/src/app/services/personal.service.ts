import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';



@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  personales: Personal[]=[];

  constructor( private http:HttpClient) { this.personal(); }
  public personal(){
    this.http.get('http://localhost:4200/assets/JSONS/personal.json').subscribe((resp: Personal[]) => {
      this.personales = resp;
    });
  }
}
