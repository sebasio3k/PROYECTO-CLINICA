import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipopersonal } from '../interfaces/tipopersonal';



@Injectable({
  providedIn: 'root'
})
export class TipopersonalService {
  tipopersonal: Tipopersonal[]=[];

  constructor( private http:HttpClient) { this.tpersonal(); }
  public tpersonal(){
    this.http.get('http://localhost:4200/assets/JSONS/tipopersonal.json').subscribe((resp: Tipopersonal[]) => {
      this.tipopersonal = resp;
    });
  }
}