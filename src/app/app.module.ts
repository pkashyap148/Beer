import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { TipsComponent } from './tips/tips.component';
import { BeerImageComponent } from './beer-image/beer-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerInfoComponent,
    TipsComponent,
    BeerImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
