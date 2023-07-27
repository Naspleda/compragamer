import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string='';
  apellido: string= '';
  dni: string= '';
  email: FormControl = new FormControl('', [Validators.email]);
  telefono: string= '';
  password: string= '';
  hide = true;
  

  constructor() { 
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  onLogin() {
    // Guardar los campos en el LocalStorage
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('apellido', this.apellido);
    localStorage.setItem('dni', this.dni);
    localStorage.setItem('email', this.email.value);
    localStorage.setItem('telefono', this.telefono);
    localStorage.setItem('password', this.password);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

}
