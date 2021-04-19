import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('1s ease-out',
            style({opacity: 1}))
        ]
      )
    ]),
    trigger('fadeOut', [
      transition(
        ':leave',
        [
          style({opacity: 1}),
          animate('1s ease-in',
            style({opacity: 0}))
        ]
      )
    ])
  ]
})
export class AboutComponent implements OnInit {

  prev = 0;
  next = 0;
  index = 0;
  viewOptions = false;
  selectedTile = 0;
  nav = 0;

  images = [
    './assets/imgs/about-img1.png',
    './assets/imgs/about-img2.png',
    './assets/imgs/about-img3.png',
    './assets/imgs/about-img2.png',
    './assets/imgs/about-img1.png',
  ];

  constructor() {

  }

  ngOnInit(): void {
    this.prev = 0;
    this.index = 1;
    this.next = 2;
  }

  previous(): void{
    if(this.nav !== 0){
      this.nav --;
    }
  }


  nextImg(): void{
    if(this.nav < (this.images.length - 3)){
      this.nav ++;
    }
  }

  viewMenu(): void{
    this.viewOptions = !this.viewOptions;
  }

  selectTile(id: number): void{
    this.selectedTile = id;
  }

}
