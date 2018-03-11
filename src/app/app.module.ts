import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialNetworkWidgetComponent } from './social-network-widget/social-network-widget.component';
import { MainPhotoComponent } from './main-photo/main-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    WeatherComponent,
    SocialNetworkWidgetComponent,
    MainPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
