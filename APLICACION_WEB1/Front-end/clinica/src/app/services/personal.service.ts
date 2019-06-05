import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';



@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  personales: Personal[]=[];
  personal1:Personal[]=[];
  constructor( private http:HttpClient) {}
  /*public personal(){
    this.http.get('http://localhost:4200/assets/JSONS/personal.json').subscribe((resp: Personal[]) => {
      this.personales = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/personal/insertar', data).subscribe((resp: Personal[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  
  //MOSTRAR
  public buscar1(personal){
    this.http.get("http://localhost:3000/personal/mostrar1/"+personal).subscribe((resp:Personal[])=>{
      this.personal1=resp;
    });
  }
  //ACTUALIZAR
  public actualizarPaciente(personal2){
    this.http.post("http://localhost:3000/personal/actualizar",personal2).subscribe((resp: Personal[])=>{
      alert("Datos actualizados correctamente");
      document.location.reload();
     });
  }
  //ELIMINAR
  public eliminarPaciente(personal2){
    var opcion = confirm("¿Seguro de eliminar dicho registro?");
    if(opcion == true){
    this.http.post("http://localhost:3000/personal/eliminar",personal2).subscribe((resp: Personal[])=>{
      alert("Datos Eliminados correctamente");
      document.location.reload();
     });
  }
}
}
