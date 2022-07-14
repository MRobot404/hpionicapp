import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.page.html',
  styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {
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
    this.nombre=localStorage.getItem("nombre2")
    this.species=localStorage.getItem("especie2")
    this.gender=localStorage.getItem("genero2")
    this.house=localStorage.getItem("casa2")
    this.dia=localStorage.getItem("dia2")
    this.anio=localStorage.getItem("anio2")
    this.wizard=localStorage.getItem("wi2");
    this.ancestry=localStorage.getItem("ance2")
    this.eye=localStorage.getItem("eye2")
    this.hair=localStorage.getItem("hair2")
    this.patronus=localStorage.getItem("patronus2")
    this.actor=localStorage.getItem("actor2")
    this.img=localStorage.getItem("imagen2")
  }

}
