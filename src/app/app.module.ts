import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SocialNetworkWidgetComponent } from './components/social-network-widget/social-network-widget.component';
import { MainPhotoComponent } from './components/main-photo/main-photo.component';

import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    WeatherComponent,
    SocialNetworkWidgetComponent,
    MainPhotoComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
