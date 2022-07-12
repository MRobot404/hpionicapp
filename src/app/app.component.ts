import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  iniciarSesion = false;
  usuarioInvalido: boolean=false;
  nombre:string;
  constructor() {}
  numero:any={};

  ingresar(numero){
    if(numero == 143){
    this.iniciarSesion=false;
    }else{
      this.iniciarSesion=true;
      this.usuarioInvalido=true;
    }
  }
 

}
