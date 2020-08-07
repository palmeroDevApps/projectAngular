import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
  	this.title = "Cristian Palmero";
  	this.subtitle = "Desarrollador PL/SQL, SQL, APEX & Trainee Web";
  	this.web = "cristian_palmero2001@hotmail.com";
  }

  ngOnInit() {
  }

}
