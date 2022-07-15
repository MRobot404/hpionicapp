import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile3',
  templateUrl: './profile3.page.html',
  styleUrls: ['./profile3.page.scss'],
})
export class Profile3Page implements OnInit {
  nombre:string;
  species:string;
  gender:string;
  house:string;
  dia:string;
  anio:string;
  wizard:string;
  ancestry:string;
  eye:string;
  hair:string;
  patronus:string;
  actor:string;
  img:string;
  constructor() { }

  ngOnInit() {
    this.nombre=localStorage.getItem("nombre3")
    this.species=localStorage.getItem("especie3")
    this.gender=localStorage.getItem("genero3")
    this.house=localStorage.getItem("casa3")
    this.dia=localStorage.getItem("dia3")
    this.anio=localStorage.getItem("anio3")
    this.wizard=localStorage.getItem("wi3");
    this.ancestry=localStorage.getItem("ance3")
    this.eye=localStorage.getItem("eye3")
    this.hair=localStorage.getItem("hair3")
    this.patronus=localStorage.getItem("patronus3")
    this.actor=localStorage.getItem("actor3")
    this.img=localStorage.getItem("imagen3")
  }

}
