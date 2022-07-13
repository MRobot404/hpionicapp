import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
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
    this.nombre=localStorage.getItem("nombre")
    this.species=localStorage.getItem("especie")
    this.gender=localStorage.getItem("genero")
    this.house=localStorage.getItem("casa")
    this.dia=localStorage.getItem("dia")
    this.anio=localStorage.getItem("anio")
    this.wizard=localStorage.getItem("wi");
    this.ancestry=localStorage.getItem("ance")
    this.eye=localStorage.getItem("eye")
    this.hair=localStorage.getItem("hair")
    this.patronus=localStorage.getItem("patronus")
    this.actor=localStorage.getItem("actor")
    this.img=localStorage.getItem("imagen")

  }

}
