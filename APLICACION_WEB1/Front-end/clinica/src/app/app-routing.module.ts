import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistrodoctoresComponent } from './registrodoctores/registrodoctores.component';
import { RegistropersonalComponent } from './registropersonal/registropersonal.component';
import { RegistrodepartamentoComponent } from './registrodepartamento/registrodepartamento.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { CitasComponent } from './citas/citas.component';
import { TratamientopacienteComponent } from './tratamientopaciente/tratamientopaciente.component';
import { TipopersonalComponent } from './tipopersonal/tipopersonal.component';
import { RegistropromocionesComponent } from './registropromociones/registropromociones.component';
import { RegistrohorarioComponent } from './registrohorario/registrohorario.component';
import { HistorialComponent } from './historial/historial.component';
import { IndexComponent } from './index/index.component';
import { PruebamenuComponent } from './pruebamenu/pruebamenu.component';
import { TablaComponent } from './tabla/tabla.component';
import { IndexadminComponent } from './indexadmin/indexadmin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { AdminpersonalComponent } from './adminpersonal/adminpersonal.component';
import { AdmintipopersonalComponent } from './admintipopersonal/admintipopersonal.component';
import { AdmindepartamentosComponent } from './admindepartamentos/admindepartamentos.component';
import { AdmindoctoresComponent } from './admindoctores/admindoctores.component';
import { AdminhorariosComponent } from './adminhorarios/adminhorarios.component';
import { AdmintratamientosComponent } from './admintratamientos/admintratamientos.component';
import { AdminpromocionesComponent } from './adminpromociones/adminpromociones.component';
import { MenusecretariaComponent } from './menusecretaria/menusecretaria.component';
import { SecretariacitasComponent } from './secretariacitas/secretariacitas.component';
import { SecretariapacientesComponent } from './secretariapacientes/secretariapacientes.component';
import { SecretariapromocionesComponent } from './secretariapromociones/secretariapromociones.component';
import { IndexsecretariaComponent } from './indexsecretaria/indexsecretaria.component';
import { IndexcontadorComponent } from './indexcontador/indexcontador.component';
import { MenucontadorComponent } from './menucontador/menucontador.component';
import { ContadoringresosComponent } from './contadoringresos/contadoringresos.component';
import { ContadorreportesComponent } from './contadorreportes/contadorreportes.component';
import { IndexdoctorComponent } from './indexdoctor/indexdoctor.component';
import { MenudoctorComponent } from './menudoctor/menudoctor.component';
import { DoctorhistorialComponent } from './doctorhistorial/doctorhistorial.component';
import { DoctortpacienteComponent } from './doctortpaciente/doctortpaciente.component';
import { DoctorcitasComponent } from './doctorcitas/doctorcitas.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroFormComponent},
  {path: 'indexadmin', component: IndexadminComponent},
    {path: 'menuadmin', component: MenuadminComponent},
      {path: 'adminpersonal', component: AdminpersonalComponent},
      {path: 'admintipopersonal', component: AdmintipopersonalComponent},
      {path: 'admindepartamentos', component: AdmindepartamentosComponent},
      {path: 'admindoctores', component: AdmindoctoresComponent},
      {path: 'adminhorarios', component: AdminhorariosComponent},
      {path: 'adminpersonal', component: AdmintratamientosComponent},
      {path: 'admintratamientos', component: AdmintratamientosComponent},
      {path: 'adminpromociones', component: AdminpromocionesComponent},
  {path: 'indexsecretaria', component: IndexsecretariaComponent},
    {path: 'menusecretaria', component: MenusecretariaComponent},
      {path: 'secretariacitas', component: SecretariacitasComponent},
      {path: 'secretariapacientes', component: SecretariapacientesComponent},
      {path: 'secretariapromociones', component: SecretariapromocionesComponent},
  {path: 'indexcontador', component: IndexcontadorComponent},
    {path: 'menucontador', component: MenucontadorComponent},
      {path: 'contadoringresos', component: ContadoringresosComponent},
      {path: 'contadorreportes', component: ContadorreportesComponent},
  {path: 'indexdoctor', component: IndexdoctorComponent},
    {path: 'menudoctor', component: MenudoctorComponent},
      {path: 'doctorhistorial', component: DoctorhistorialComponent},
      {path: 'doctortpacientes', component: DoctortpacienteComponent},
      {path: 'doctorcitas', component: DoctorcitasComponent},
  {path: 'registrodoctores', component: RegistrodoctoresComponent},
  {path: 'registropersonal', component: RegistropersonalComponent},
  {path: 'registrodepartamento', component: RegistrodepartamentoComponent},
  {path: 'registrotratamiento', component: TratamientoComponent},
  {path: 'registrocitas', component: CitasComponent},
  {path: 'registrotratamientopaciente', component: TratamientopacienteComponent},
  {path: 'registrotipopersonal', component: TipopersonalComponent},
  {path: 'registropromociones', component: RegistropromocionesComponent},
  {path: 'registrohorarios', component: RegistrohorarioComponent},
  {path: 'registrohistorial', component: HistorialComponent},
  {path: 'indexComponent', component: IndexComponent},
  {path: 'pruebamenu', component: PruebamenuComponent},
  {path: 'tablauser', component: TablaComponent},


  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
