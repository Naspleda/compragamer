import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { KartComponent } from './kart/kart.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HomeComponent, KartComponent, PruebaComponent],
  declarations: [HomeComponent, KartComponent, PruebaComponent]
})
export class PagesModule { }
