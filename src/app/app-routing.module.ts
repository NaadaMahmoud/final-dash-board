import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:ClientsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
