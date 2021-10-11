import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  /*{path:'home', component:HomeComponent},*/
  {path:'home', component:HomeComponent,canActivate:[LoginGuard]},
  {path:'addarticle', component:AddarticleComponent},
  {path:'addarticle/:i', component:AddarticleComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent , HomeComponent,RegisterComponent]