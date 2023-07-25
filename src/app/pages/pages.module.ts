import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { KartComponent } from './kart/kart.component';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../core/header/header.component';
import { PruebaComponent } from '../core/prueba/prueba.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HomeComponent, KartComponent, LoginComponent, HeaderComponent, PruebaComponent],
  declarations: [HomeComponent, KartComponent, LoginComponent, HeaderComponent, PruebaComponent]
})
export class PagesModule { }