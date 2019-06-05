import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from '../interfaces/tratamientos';



@Injectable({
  providedIn: 'root'
})
export class TratamientosService {
  tratamientoo: Tratamiento[]=[];
  tratamiento1: Tratamiento[] = [];

  constructor( private http:HttpClient) {  }
 /* public tratamiento(){
    this.http.get('http://localhost:4200/assets/JSONS/tratamientos.json').subscribe((resp: Tratamiento[]) => {
      this.tratamientoo = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/tratamientos/insertar', data).subscribe((resp: Tratamiento[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  
 //MOSTRAR
 public buscar1(trat){
  this.http.get('http://localhost:3000/tratamientos/mostrar1/' + trat).subscribe((resp: Tratamiento[]) => {
    this.tratamiento1 = resp;
  });
}
//ACTUALIZAR
public actualizarTratamiento(trat2){
  this.http.post("http://localhost:3000/tratamientos/actualizar",trat2).subscribe((resp: Tratamiento[])=>{
    alert("Datos actualizados correctamente");
    document.location.reload();
   });
}
//ELIMINAR
public eliminarTratamiento(trat2){
  var opcion = confirm("¿Seguro de eliminar dicho registro?");
  if(opcion == true){
  this.http.post("http://localhost:3000/tratamientos/eliminar",trat2).subscribe((resp: Tratamiento[])=>{
    alert("Datos Eliminados correctamente");
    document.location.reload();
   });
}
}
}