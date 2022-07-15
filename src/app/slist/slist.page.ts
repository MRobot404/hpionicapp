import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slist',
  templateUrl: './slist.page.html',
  styleUrls: ['./slist.page.scss'],
})
export class SlistPage implements OnInit {
  characters = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<any>('https://hp-api.herokuapp.com/api/characters/house/slytherin')
    .subscribe((res) => {
      console.log(res);
      this.characters = res;
     
    });
  }

  info3(
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
    
    localStorage.setItem('nombre3', name);
    localStorage.setItem('especie3', species);
    localStorage.setItem('genero3', gender);
    localStorage.setItem('casa3', house);
    localStorage.setItem('dia3', dateOfBirth);
    localStorage.setItem('anio3', yearOfBirth);
    localStorage.setItem('wi3',wizard);
    localStorage.setItem('ance3',ancestry);
    localStorage.setItem('eye3',eyeColour);
    localStorage.setItem('hair3',hairColour);
    localStorage.setItem('patronus3', patronus);
    localStorage.setItem('actor3',actor)
    localStorage.setItem("imagen3",imagen)
  }

}
