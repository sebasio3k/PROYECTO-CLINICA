import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// nuestros imports------------------------------------------------

// Paquete para procesar formularios con angular
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line: import-spacing
import { MatInputModule } from '@angular/material/input';
// Se importa atm, el componente que creamos desde la consola con ng g component nombre-componenete
import { RegistroFormComponent } from './registro-form/registro-form.component';

import { LoginComponent } from './login/login.component';
import { RegistrodoctoresComponent } from './registrodoctores/registrodoctores.component';
import { RegistropersonalComponent } from './registropersonal/registropersonal.component';
import { RegistrodepartamentoComponent } from './registrodepartamento/registrodepartamento.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { CitasComponent } from './citas/citas.component';
import { TratamientopacienteComponent } from './tratamientopaciente/tratamientopaciente.component';
import { TipopersonalComponent } from './tipopersonal/tipopersonal.component';
import { RegistropromocionesComponent } from './registropromociones/registropromociones.component';
import { HistorialComponent } from './historial/historial.component';
import { RegistrohorarioComponent } from './registrohorario/registrohorario.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { PruebamenuComponent } from './pruebamenu/pruebamenu.component';
import { TablaComponent } from './tabla/tabla.component';
import { PruebacrudComponent } from './pruebacrud/pruebacrud.component';



// Aqui se
@NgModule({
  declarations: [
    AppComponent,
    RegistroFormComponent,
    LoginComponent,
    RegistrodoctoresComponent,
    RegistropersonalComponent,
    RegistrodepartamentoComponent,
    TratamientoComponent,
    CitasComponent,
    TratamientopacienteComponent,
    TipopersonalComponent,
    RegistropromocionesComponent,
    HistorialComponent,
    RegistrohorarioComponent,
    IndexComponent,
    PruebamenuComponent,
    TablaComponent,
    PruebacrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
