import { Component } from '@angular/core';
import { RequestService } from './core/services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compragamer';
  public listaDeProductos:Array<any> = []

  constructor(private requestService:RequestService){}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.requestService.getJsonData()
    .subscribe(respuesta => {
      console.log(respuesta)
    })
  }
}

// this.listaDeProductos = respuesta;
