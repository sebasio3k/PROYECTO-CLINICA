import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistrodoctoresComponent } from './registrodoctores/registrodoctores.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroFormComponent},
  {path:'registrodoctores',component:RegistrodoctoresComponent},
  {path:'**',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
