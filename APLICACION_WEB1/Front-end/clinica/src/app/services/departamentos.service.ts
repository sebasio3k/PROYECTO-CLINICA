import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../interfaces/departamentos';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  departamento: Departamentos[]=[];

  constructor( private http:HttpClient) { this.departamentos(); }
  public departamentos(){
    this.http.get('http://localhost:4200/assets/JSONS/departamentos.json').subscribe((resp: Departamentos[]) => {
      this.departamento = resp;
    });
  }
}
