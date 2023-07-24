import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KartComponent } from '../pages/kart/kart.component';
import { HomeComponent } from '../pages/home/home.component';
import { PruebaComponent } from '../pages/prueba/prueba.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path:'', component:HomeComponent,},
  { path:'kart', component:KartComponent, },
  { path:'prueba', component:PruebaComponent, },

  { path:'**', redirectTo:'', },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
