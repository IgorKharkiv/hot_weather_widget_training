import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public hotels: Hotel[] = [];
  public title = 'Available Hotels:';
  constructor() { }

  ngOnInit() {
  }

}
