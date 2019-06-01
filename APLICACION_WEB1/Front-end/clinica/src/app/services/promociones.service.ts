import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promociones } from '../interfaces/promociones';



@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  promocion: Promociones[]=[];

  constructor( private http:HttpClient) { this.promociones(); }
  public promociones(){
    this.http.get('http://localhost:4200/assets/JSONS/promociones.json').subscribe((resp: Promociones[]) => {
      this.promocion = resp;
    });
  }
}
