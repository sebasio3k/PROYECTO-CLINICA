import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../interfaces/departamentos';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  departamento: Departamentos[] = [];

  constructor( private http: HttpClient) { }
  /*public departamentos(){
    this.http.get('http://localhost:4200/assets/JSONS/departamentos.json').subscribe((resp: Departamentos[]) => {
      this.departamento = resp;
    });

  }*/
public agregar(data) {
  this.http.post('http://localhost:3000/departamentos/insertar', data).subscribe((resp: Departamentos[]) => {
    alert('datos agregados');
    location.reload();
  });
}
}