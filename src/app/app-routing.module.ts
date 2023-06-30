import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Home', component:HomeComponent},
  {path:'edit',component:EmployeeFormComponent},
  // {path:'',redirectTo:'Home',pathMatch:'full'}
  {path:'',redirectTo:'Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
