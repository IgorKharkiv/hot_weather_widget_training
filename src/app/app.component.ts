import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Hotel } from './interfaces/index';
import { hotels$ } from './store/hotels';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public title = 'Hot Weather Widget';
  public copyrightMsg = '© 2015 Hot Weather Widget. All rights reserved | Design by';
  public copyrightLink = 'http://w3layouts.com';
  public copyrightName = 'W3layouts';
  public hotels: Hotel[] = [];
  public activeHotel: Hotel = null;

  ngOnInit() {
    hotels$.subscribe(hotels => {
      this.hotels = hotels;
      this.activeHotel = hotels[0];
    });
  }

}
