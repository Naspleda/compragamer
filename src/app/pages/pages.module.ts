import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { KartComponent } from './kart/kart.component';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HomeComponent, KartComponent, LoginComponent],
  declarations: [HomeComponent, KartComponent, LoginComponent]
})
export class PagesModule { }
