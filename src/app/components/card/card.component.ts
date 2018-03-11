import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../../interfaces/';
import { find } from 'lodash';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output()
  public hotelChangeEvent = new EventEmitter();

  @Input()
  public hotels: Hotel[] = [];
  public title = 'Available Hotels:';
  constructor() { }

  ngOnInit() {
  }

  public setActiveHotel(id: number): void {
    const activeHotel: Hotel = find(this.hotels, { 'id': id });
    this.hotelChangeEvent.emit(activeHotel);
  }

}
