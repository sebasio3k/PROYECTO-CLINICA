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
import { IndexsecretariaComponent } from './indexsecretaria/indexsecretaria.component';
import { IndexdoctorComponent } from './indexdoctor/indexdoctor.component';
import { IndexcontadorComponent } from './indexcontador/indexcontador.component';
import { IndexadminComponent } from './indexadmin/indexadmin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { AdmintratamientosComponent } from './admintratamientos/admintratamientos.component';
import { AdmindoctoresComponent } from './admindoctores/admindoctores.component';
import { AdminpromocionesComponent } from './adminpromociones/adminpromociones.component';
import { AdminpersonalComponent } from './adminpersonal/adminpersonal.component';
import { AdminhorariosComponent } from './adminhorarios/adminhorarios.component';
import { AdmindepartamentosComponent } from './admindepartamentos/admindepartamentos.component';
import { AdmintipopersonalComponent } from './admintipopersonal/admintipopersonal.component';
import { MenusecretariaComponent } from './menusecretaria/menusecretaria.component';
import { MenucontadorComponent } from './menucontador/menucontador.component';
import { MenudoctorComponent } from './menudoctor/menudoctor.component';
import { SecretariacitasComponent } from './secretariacitas/secretariacitas.component';
import { SecretariapacientesComponent } from './secretariapacientes/secretariapacientes.component';
import { SecretariapromocionesComponent } from './secretariapromociones/secretariapromociones.component';
import { ContadoringresosComponent } from './contadoringresos/contadoringresos.component';
import { ContadorreportesComponent } from './contadorreportes/contadorreportes.component';
import { DoctorhistorialComponent } from './doctorhistorial/doctorhistorial.component';
import { DoctortpacienteComponent } from './doctortpaciente/doctortpaciente.component';
import { DoctorcitasComponent } from './doctorcitas/doctorcitas.component';
import { RudadminpersonalComponent } from './rudadminpersonal/rudadminpersonal.component';
import { RudadmintipopersonalComponent } from './rudadmintipopersonal/rudadmintipopersonal.component';
import { RudadmindepartamentosComponent } from './rudadmindepartamentos/rudadmindepartamentos.component';
import { RudadmindoctoresComponent } from './rudadmindoctores/rudadmindoctores.component';
import { RudadminhorariosComponent } from './rudadminhorarios/rudadminhorarios.component';
import { RudadmintratamientosComponent } from './rudadmintratamientos/rudadmintratamientos.component';
import { RudadminpromocionesComponent } from './rudadminpromociones/rudadminpromociones.component';
import { RudsecretariacitasComponent } from './rudsecretariacitas/rudsecretariacitas.component';
import { RudsecretariapacientesComponent } from './rudsecretariapacientes/rudsecretariapacientes.component';
import { RudsecretariapromocionesComponent } from './rudsecretariapromociones/rudsecretariapromociones.component';
import { RuddoctorhistorialComponent } from './ruddoctorhistorial/ruddoctorhistorial.component';
import { RuddoctorcitasComponent } from './ruddoctorcitas/ruddoctorcitas.component';



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
    PruebacrudComponent,
    IndexsecretariaComponent,
    IndexdoctorComponent,
    IndexcontadorComponent,
    IndexadminComponent,
    MenuadminComponent,
    AdmintratamientosComponent,
    AdmindoctoresComponent,
    AdminpromocionesComponent,
    AdminpersonalComponent,
    AdminhorariosComponent,
    AdmindepartamentosComponent,
    AdmintipopersonalComponent,
    MenusecretariaComponent,
    MenucontadorComponent,
    MenudoctorComponent,
    SecretariacitasComponent,
    SecretariapacientesComponent,
    SecretariapromocionesComponent,
    ContadoringresosComponent,
    ContadorreportesComponent,
    DoctorhistorialComponent,
    DoctortpacienteComponent,
    DoctorcitasComponent,
    RudadminpersonalComponent,
    RudadmintipopersonalComponent,
    RudadmindepartamentosComponent,
    RudadmindoctoresComponent,
    RudadminhorariosComponent,
    RudadmintratamientosComponent,
    RudadminpromocionesComponent,
    RudsecretariacitasComponent,
    RudsecretariapacientesComponent,
    RudsecretariapromocionesComponent,
    RuddoctorhistorialComponent,
    RuddoctorcitasComponent
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
