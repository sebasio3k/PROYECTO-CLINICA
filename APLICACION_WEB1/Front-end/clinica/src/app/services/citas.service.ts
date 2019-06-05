import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../interfaces/citas';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  cita: Citas[] = [];
  citas1: Citas[]=[];
  constructor( private http: HttpClient) { }
  /*public citas(){
    this.http.get('http://localhost:4200/assets/JSONS/citas.json').subscribe((resp: Citas[]) => {
      this.cita = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/citas/insertar', data).subscribe((resp: Citas[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  //MOSTRAR
  public buscar1(citas){
    this.http.get("http://localhost:3000/citas/mostrar1/"+citas).subscribe((resp:Citas[])=>{
      this.citas1=resp;
    });
  }
  public buscar(){
    this.http.get("http://localhost:3000/citas/mostrar/").subscribe((resp:Citas[])=>{
      this.citas1=resp;
    });
  }
  //MOSTRAR
  public buscar2(citas){
    this.http.get("http://localhost:3000/citas/mostrardoc/"+citas).subscribe((resp:Citas[])=>{
      this.citas1=resp;
    });
  }
  //ACTUALIZAR
  public actualizarCita(cita2){
    this.http.post("http://localhost:3000/citas/actualizar",cita2).subscribe((resp: Citas[])=>{
      alert("Datos actualizados correctamente");
      document.location.reload();
     });
  }
  //ELIMINAR
  public eliminarCita(cita2){
    var opcion = confirm("¿Seguro de eliminar dicho registro?");
    if(opcion == true){
    this.http.post("http://localhost:3000/citas/eliminar",cita2).subscribe((resp: Citas[])=>{
      alert("Datos Eliminados correctamente");
      document.location.reload();
     });
  }
}
}