import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.css']
})
export class BeerInfoComponent implements OnInit {

  @Input() public parentBeerData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
