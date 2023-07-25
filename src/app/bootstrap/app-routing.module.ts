import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KartComponent } from '../pages/kart/kart.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes = [
  { path:'', component:HomeComponent,},
  { path:'kart', component:KartComponent, },
  { path:'login', component:LoginComponent },

  { path:'**', redirectTo:'', },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
