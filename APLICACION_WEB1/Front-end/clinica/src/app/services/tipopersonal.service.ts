import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipopersonal } from '../interfaces/tipopersonal';



@Injectable({
  providedIn: 'root'
})
export class TipopersonalService {
  tipopersonal: Tipopersonal[]=[];
  tipopersonal1: Tipopersonal[]=[];

  constructor( private http:HttpClient) {  }
  /*public tpersonal(){
    this.http.get('http://localhost:4200/assets/JSONS/tipopersonal.json').subscribe((resp: Tipopersonal[]) => {
      this.tipopersonal = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/tipopersonal/insertar', data).subscribe((resp: Tipopersonal[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  
 //MOSTRAR
 public buscar1(tper){
  this.http.get('http://localhost:3000/tipopersonal/mostrar1/' + tper).subscribe((resp: Tipopersonal[]) => {
    this.tipopersonal1 = resp;
  });
}
//ACTUALIZAR
public actualizarTipopersonal(tper2){
  this.http.post("http://localhost:3000/tipopersonal/actualizar",tper2).subscribe((resp: Tipopersonal[])=>{
    alert("Datos actualizados correctamente");
    document.location.reload();
   });
}
//ELIMINAR
public eliminarTipopersonal(tper2){
  var opcion = confirm("¿Seguro de eliminar dicho registro?");
  if(opcion == true){
  this.http.post("http://localhost:3000/tipopersonal/eliminar",tper2).subscribe((resp: Tipopersonal[])=>{
    alert("Datos Eliminados correctamente");
    document.location.reload();
   });
}
}
}