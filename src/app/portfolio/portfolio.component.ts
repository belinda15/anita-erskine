import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
export class PortfolioComponent implements OnInit {

  viewOptions = false;
  selectedTile = 0;
  constructor() { }

  ngOnInit(): void {
  }

  viewMenu(): void{
    this.viewOptions = !this.viewOptions;
  }

  selectTile(id: number): void{
    this.selectedTile = id;
  }

}
