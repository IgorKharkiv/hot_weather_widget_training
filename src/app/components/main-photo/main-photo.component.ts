import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Hotel } from '../../interfaces/index';
import { placeholderUrl } from '../../../shared/global-constants';
import { get } from 'lodash';
@Component({
  selector: 'app-main-photo',
  templateUrl: './main-photo.component.html',
  styleUrls: ['./main-photo.component.css']
})
export class MainPhotoComponent implements OnChanges, OnInit {

  @Input()
  public hotel: Hotel;
  public photoUrl: string;
  public photoPlaceholderUrl: string;
  constructor() { }

  ngOnChanges() {
    this.photoUrl = get(this.hotel, ['images', 0], placeholderUrl);
  }

  ngOnInit() {

  }

}
