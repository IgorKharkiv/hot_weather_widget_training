import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hotel } from '../../interfaces/index';
import { get } from 'lodash';
import { placeholderUrl } from '../../shared/global-constants';
@Component({
  selector: 'app-social-network-widget',
  templateUrl: './social-network-widget.component.html',
  styleUrls: ['./social-network-widget.component.css']
})
export class SocialNetworkWidgetComponent implements OnInit, OnChanges {

  @Input()
  public hotel: Hotel;
  public title = 'Hotel in the Twitter';
  public followers = 0;
  public following = 0;
  public photoUrl: String = placeholderUrl;
  constructor() { }

  ngOnChanges() {
    this.followers = get(this.hotel, 'twitter.followers', 0);
    this.following = get(this.hotel, 'twitter.following', 0);
    this.photoUrl = get(this.hotel, ['images', 0], placeholderUrl);
  }

  ngOnInit() {
  }

}
