import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../interfaces/departamentos';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  departamento: Departamentos[] = [];
  departamento1: Departamentos[] = [];
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
 //MOSTRAR
 public buscar1(dep){
  this.http.get('http://localhost:3000/departamentos/mostrar1/' + dep).subscribe((resp: Departamentos[]) => {
    this.departamento1 = resp;
  });
}
//ACTUALIZAR
public actualizarDep(dep1){
  this.http.post("http://localhost:3000/departamentos/actualizar",dep1).subscribe((resp: Departamentos[])=>{
    alert("Datos actualizados correctamente");
    document.location.reload();
   });
}
//ELIMINAR
public eliminarDep(dep1){
  var opcion = confirm("¿Seguro de eliminar dicho registro?");
  if(opcion == true){
  this.http.post("http://localhost:3000/departamentos/eliminar",dep1).subscribe((resp: Departamentos[])=>{
    alert("Datos Eliminados correctamente");
    document.location.reload();
   });
}
}
}