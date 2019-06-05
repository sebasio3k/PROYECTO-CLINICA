import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctores } from '../interfaces/doctores';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctor: Doctores[]=[];
  doctor1:Doctores[]=[];
  constructor( private http:HttpClient) { }
  /*public doctores(){
    this.http.get('http://localhost:4200/assets/JSONS/doctores.json').subscribe((resp: Doctores[]) => {
      this.doctor = resp;
    });
  }*/

  public agregar(data) {
    this.http.post('http://localhost:3000/doctores/insertar', data).subscribe((resp: Doctores[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
   //MOSTRAR
   public buscar1(doc){
    this.http.get("http://localhost:3000/Doctores/mostrar1/"+doc).subscribe((resp:Doctores[])=>{
      this.doctor1=resp;
    });
  }
  //ACTUALIZAR
  public actualizarDoctor(doc2){
    this.http.post("http://localhost:3000/Doctores/actualizar",doc2).subscribe((resp: Doctores[])=>{
      alert("Datos actualizados correctamente");
      document.location.reload();
     });
  }
  //ELIMINAR
  public eliminarDoctor(doc2){
    var opcion = confirm("¿Seguro de eliminar dicho registro?");
    if(opcion == true){
    this.http.post("http://localhost:3000/Doctores/eliminar",doc2).subscribe((resp: Doctores[])=>{
      alert("Datos Eliminados correctamente");
      document.location.reload();
     });
  }
}
}

