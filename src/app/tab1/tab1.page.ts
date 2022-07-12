import { Component, OnInit, ɵɵtrustConstantHtml } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  characters =[];
  constructor( private http: HttpClient) {
  
  }
  ngOnInit(){
    this.http.get<any>('http://hp-api.herokuapp.com/api/characters').subscribe(res =>{
      console.log(res)
      this.characters=res;
      console.log("You are MRobot?")
    })
  }

  }

  

