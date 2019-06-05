import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promociones } from '../interfaces/promociones';



@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  promocion: Promociones[] = [];
  promocion1: Promociones[] = [];

  constructor( private http: HttpClient) { }
  /*public promociones(){
    this.http.get('http://localhost:4200/assets/JSONS/promociones.json').subscribe((resp: Promociones[]) => {
      this.promocion = resp;
    });
  }*/
  public agregar(data) {
    this.http.post('http://localhost:3000/promociones/insertar', data).subscribe((resp: Promociones[]) => {
      alert('datos agregados');
      location.reload();
    });
  }

 // MOSTRAR
 public buscar1(trat) {
  this.http.get('http://localhost:3000/promociones/mostrar1/' + trat).subscribe((resp: Promociones[]) => {
    this.promocion1 = resp;
  });
}
// ACTUALIZAR
public actualizarPromocion(trat2) {
  this.http.post('http://localhost:3000/promociones/actualizar', trat2).subscribe((resp: Promociones[]) => {
    alert('Datos actualizados correctamente');
    document.location.reload();
   });
}
// ELIMINAR
public eliminarPromocion(trat2) {
  var opcion = confirm('¿Seguro de eliminar dicho registro?');
  if (opcion === true) {
  this.http.post('http://localhost:3000/promociones/eliminar', trat2).subscribe((resp: Promociones[]) => {
    alert('Datos Eliminados correctamente');
    document.location.reload();
   });
}
}
}


