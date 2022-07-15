import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  boton1(){
    location.href="/glist"
  }
  boton2(){
    location.href="/slist"
  }
  boton3(){
    location.href="/hlist"
  }

  boton4(){
    location.href="/rlist"
  }

}
