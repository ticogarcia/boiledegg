import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts = [
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    },
    {
      title: 'Recipe One',
      author: 'Dave'
    }
  ];

  constructor() { }

}
