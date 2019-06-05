import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horarios } from '../interfaces/horarios';



@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  horario: Horarios[]=[];
  horario1: Horarios[]=[];
  constructor( private http:HttpClient) { }
  /*public horarios(){
    this.http.get('http://localhost:4200/assets/JSONS/horarios.json').subscribe((resp: Horarios[]) => {
      this.horario = resp;
    });
  }*/
  
  public agregar(data) {
    this.http.post('http://localhost:3000/horarios/insertar', data).subscribe((resp: Horarios[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  
 //MOSTRAR
 public buscar1(horario){
  this.http.get('http://localhost:3000/horarios/mostrar1/' + horario).subscribe((resp: Horarios[]) => {
    this.horario1 = resp;
  });
}
//ACTUALIZAR
public actualizarHorario(horario2){
  this.http.post("http://localhost:3000/horarios/actualizar",horario2).subscribe((resp: Horarios[])=>{
    alert("Datos actualizados correctamente");
    document.location.reload();
   });
}
//ELIMINAR
public eliminarHorario(horario2){
  var opcion = confirm("¿Seguro de eliminar dicho registro?");
  if(opcion == true){
  this.http.post("http://localhost:3000/horarios/eliminar",horario2).subscribe((resp: Horarios[])=>{
    alert("Datos Eliminados correctamente");
    document.location.reload();
   });
}
}
}

  