import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibeer } from './Ibeer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor(private _http: HttpClient) { }
  getData():Observable<Ibeer>{
    return this._http.get<Ibeer>('https://api.punkapi.com/v2/beers/random');
  }
}
