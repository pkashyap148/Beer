import { Component } from '@angular/core';
import { BeerServiceService } from './beer-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer';
  public beerData:any = []
  constructor(private beer:BeerServiceService){}
  ngOnInit() {
    this.beer.getData().subscribe(data => this.beerData = data);
  }

}
