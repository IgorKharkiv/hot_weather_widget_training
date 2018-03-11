import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hotel } from '../../interfaces/index';
import { get } from 'lodash';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {

  @Input()
  public hotel: Hotel;

  public title = 'Current Weather';
  public airTemp = 0;
  public waterTemp = 0;
  constructor() { }

  ngOnChanges() {
    this.airTemp = get(this.hotel, 'weather.air', 'n/a');
    this.waterTemp = get(this.hotel, 'weather.water', 'n/a');
  }

  ngOnInit() {
  }

}
