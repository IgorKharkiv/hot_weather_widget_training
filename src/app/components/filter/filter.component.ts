import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { Hotel } from '../../interfaces/index';
import { get, filter } from 'lodash';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  public hotels: Hotel[] = [];

  @Output()
  public hotelsFilteredEvent: EventEmitter<Hotel[]> = new EventEmitter();
  public filters: string[] = ['hotel', 'tour', 'sea'];
  public clonedHotels: Hotel[];
  public currentFilter: string;
  constructor() { }

  ngOnInit() {
  }

  public filterHotels(tag: string) {
    if (!this.hotels.length) { return; }
    this.currentFilter = tag;
    if (!this.clonedHotels) {
      this.clonedHotels = [...this.hotels];
    }
    const predicateFn = (hotel) => {
      const tags = get(hotel, 'tags', []);
      return tags.includes(tag);
    };
    const filteredHotels = filter(this.clonedHotels, predicateFn);
    this.hotelsFilteredEvent.emit(filteredHotels);
  }

  public showAllHotels() {
    this.currentFilter = 'all';
    this.hotelsFilteredEvent.emit(this.clonedHotels);
  }
}
