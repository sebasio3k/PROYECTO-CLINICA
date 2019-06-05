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
import { RudadminpersonalComponent } from './rudadminpersonal/rudadminpersonal.component';
import { RudadmintipopersonalComponent } from './rudadmintipopersonal/rudadmintipopersonal.component';
import { RudadmindepartamentosComponent } from './rudadmindepartamentos/rudadmindepartamentos.component';
import { RudadmindoctoresComponent } from './rudadmindoctores/rudadmindoctores.component';
import { RudadminhorariosComponent } from './rudadminhorarios/rudadminhorarios.component';
import { RudadmintratamientosComponent } from './rudadmintratamientos/rudadmintratamientos.component';
import { RudadminpromocionesComponent } from './rudadminpromociones/rudadminpromociones.component';
import { RuddoctorcitasComponent } from './ruddoctorcitas/ruddoctorcitas.component';
import { RuddoctorhistorialComponent } from './ruddoctorhistorial/ruddoctorhistorial.component';
import { RudsecretariacitasComponent } from './rudsecretariacitas/rudsecretariacitas.component';
import { RudsecretariapacientesComponent } from './rudsecretariapacientes/rudsecretariapacientes.component';
import { RudsecretariapromocionesComponent } from './rudsecretariapromociones/rudsecretariapromociones.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // ADMIN
  {path: 'indexadmin', component: IndexadminComponent},
    {path: 'menuadmin', component: MenuadminComponent},
      {path: 'adminpersonal', component: AdminpersonalComponent},
        // CRUD PERSONAL
        {path: 'registropersonal', component: RegistropersonalComponent},
        {path: 'rudadminpersonal', component: RudadminpersonalComponent},
      {path: 'admintipopersonal', component: AdmintipopersonalComponent},
        // CRUD TIPO PERSONAL
        {path: 'registrotipopersonal', component: TipopersonalComponent},
        {path: 'rudadmintipopersonal', component: RudadmintipopersonalComponent},
      {path: 'admindepartamentos', component: AdmindepartamentosComponent},
        // CRUD DEPARTAMENTOS
        {path: 'registrodepartamento', component: RegistrodepartamentoComponent},
        {path: 'rudadmindepartamentos', component: RudadmindepartamentosComponent},
      {path: 'admindoctores', component: AdmindoctoresComponent},
        // CRUD DOCTORES
        {path: 'registrodoctores', component: RegistrodoctoresComponent},
        {path: 'rudadmindoctores', component: RudadmindoctoresComponent},
      {path: 'adminhorarios', component: AdminhorariosComponent},
        // CRUD HORARIOS
        {path: 'registrohorarios', component: RegistrohorarioComponent},
        {path: 'rudadminhorarios', component: RudadminhorariosComponent},
      {path: 'admintratamientos', component: AdmintratamientosComponent},
        // CRUD TRATAMIENTOS
        {path: 'registrotratamiento', component: TratamientoComponent},
        {path: 'rudadmintratamientos', component: RudadmintratamientosComponent},
      {path: 'adminpromociones', component: AdminpromocionesComponent},
        // CRUD PROMOCIONES
        {path: 'registropromociones', component: RegistropromocionesComponent},
        {path: 'rudadminpromociones', component: RudadminpromocionesComponent},
  // SECRETARIA
  {path: 'indexsecretaria', component: IndexsecretariaComponent},
    {path: 'menusecretaria', component: MenusecretariaComponent},
      {path: 'secretariacitas', component: SecretariacitasComponent},
        // CRUD CITAS
        {path: 'registrocitas', component: CitasComponent},
        {path: 'rudsecretariacitas', component: RudsecretariacitasComponent},
      {path: 'secretariapacientes', component: SecretariapacientesComponent},
        // CRUD PACIENTES
        {path: 'registro', component: RegistroFormComponent},
        {path: 'rudsecretariapacientes', component: RudsecretariapacientesComponent},
      {path: 'secretariapromociones', component: SecretariapromocionesComponent},
        // CRUD PROMOCIONES
        {path: 'rudsecretariapromociones', component: RudsecretariapromocionesComponent},
  // CONTADOR
  {path: 'indexcontador', component: IndexcontadorComponent},
    {path: 'menucontador', component: MenucontadorComponent},
      {path: 'contadoringresos', component: ContadoringresosComponent},
      {path: 'contadorreportes', component: ContadorreportesComponent},
  // DOCTOR
  {path: 'indexdoctor', component: IndexdoctorComponent},
    {path: 'menudoctor', component: MenudoctorComponent},
      {path: 'doctorhistorial', component: DoctorhistorialComponent},
        // CRUD HISTORIAL
        {path: 'registrohistorial', component: HistorialComponent},
        {path: 'ruddoctorhistorial', component: RuddoctorhistorialComponent},
      {path: 'doctortpacientes', component: DoctortpacienteComponent},
        {path: 'registrotratamientopaciente', component: TratamientopacienteComponent},
      {path: 'doctorcitas', component: DoctorcitasComponent},
      // CRUD CITAS
      {path: 'ruddoctorcitas', component: RuddoctorcitasComponent},

  // PRUEBAS
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
