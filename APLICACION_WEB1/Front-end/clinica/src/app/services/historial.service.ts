import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../interfaces/historial';



@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historiaal: Historial[]=[];
  historial1: Historial[]=[];
  constructor( private http:HttpClient) { }

  public agregar(data) {
    this.http.post('http://localhost:3000/Historial/insertar', data).subscribe((resp: Historial[]) => {
      alert('datos agregados');
      location.reload();
    });
  }
  public buscar() {
    this.http.get('http://localhost:3000/Historial/mostrar/').subscribe((resp: Historial[]) => {
      this.historial1 = resp;
      
    });
  }
  public buscar1(doc){
    this.http.get("http://localhost:3000/Historial/mostrar1/"+doc).subscribe((resp:Historial[])=>{
      this.historial1=resp;
    });
  }
  /*public historial(){
    this.http.get('http://localhost:4200/assets/JSONS/historial.json').subscribe((resp: Historial[]) => {
      this.historiaal = resp;
    });
  }*/
}

