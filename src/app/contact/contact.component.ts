import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {

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
