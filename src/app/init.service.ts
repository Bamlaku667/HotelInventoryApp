import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  
  config: any;
  constructor(private http:HttpClient) { }

  init() {
    this.http.get('/home/bamlak/Desktop/code/angular_projects/hotelInventoryApp/src/assets/config.json').pipe(tap((config) => this.config = config));
  }
}
