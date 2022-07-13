import { Component, OnInit, ɵɵtrustConstantHtml } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  characters = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any>('http://hp-api.herokuapp.com/api/characters')
      .subscribe((res) => {
        console.log(res);
        this.characters = res;
        console.log('You are MRobot?');
      });
  }
  info(
    name,
    species,
    gender,
    house,
    dateOfBirth,
    yearOfBirth,
    wizard,
    ancestry,
    eyeColour,
    hairColour,
    patronus,
    actor,
    imagen
  ) {
    
    localStorage.setItem('nombre', name);
    localStorage.setItem('especie', species);
    localStorage.setItem('genero', gender);
    localStorage.setItem('casa', house);
    localStorage.setItem('dia', dateOfBirth);
    localStorage.setItem('anio', yearOfBirth);
    localStorage.setItem('wi',wizard);
    localStorage.setItem('ance',ancestry);
    localStorage.setItem('eye',eyeColour);
    localStorage.setItem('hair',hairColour);
    localStorage.setItem('patronus', patronus);
    localStorage.setItem('actor',actor)
    localStorage.setItem("imagen",imagen)
  }
}
