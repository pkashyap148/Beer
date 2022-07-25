import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-image',
  templateUrl: './beer-image.component.html',
  styleUrls: ['./beer-image.component.css']
})
export class BeerImageComponent implements OnInit {
  @Input() public parentBeerData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
