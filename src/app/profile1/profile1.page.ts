import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
nombre:string;
  constructor() { }

  ngOnInit() {
    this.nombre=localStorage.getItem("nombre")
  }

}
