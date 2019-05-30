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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroFormComponent},
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

  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
