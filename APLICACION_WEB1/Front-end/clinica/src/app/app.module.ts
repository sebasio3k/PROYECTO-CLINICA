import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// nuestros imports------------------------------------------------

// Paquete para procesar formularios con angular
import { FormsModule } from '@angular/forms';
// Se importa atm, el componente que creamos desde la consola con ng g component nombre-componenete
import { RegistroFormComponent } from './registro-form/registro-form.component';

import { LoginComponent } from './login/login.component';
import { RegistrodoctoresComponent } from './registrodoctores/registrodoctores.component';



// Aqui se
@NgModule({
  declarations: [
    AppComponent,
    RegistroFormComponent,
    LoginComponent,
    RegistrodoctoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
