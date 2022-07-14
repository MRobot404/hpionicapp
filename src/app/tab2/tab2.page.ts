import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  characters = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('http://hp-api.herokuapp.com/api/characters/staff')
      .subscribe((res) => {
        console.log(res);
        this.characters = res;
       
      });
  }

  info2(
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
    
    localStorage.setItem('nombre2', name);
    localStorage.setItem('especie2', species);
    localStorage.setItem('genero2', gender);
    localStorage.setItem('casa2', house);
    localStorage.setItem('dia2', dateOfBirth);
    localStorage.setItem('anio2', yearOfBirth);
    localStorage.setItem('wi2',wizard);
    localStorage.setItem('ance2',ancestry);
    localStorage.setItem('eye2',eyeColour);
    localStorage.setItem('hair2',hairColour);
    localStorage.setItem('patronus2', patronus);
    localStorage.setItem('actor2',actor)
    localStorage.setItem("imagen2",imagen)
  }

}
