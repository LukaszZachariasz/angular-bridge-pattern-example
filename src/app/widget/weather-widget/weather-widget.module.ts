import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherWidgetService} from "./weather-widget.service";
import {WeatherWidgetComponent} from "./weather-widget.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    WeatherWidgetComponent
  ],
  providers: [
    WeatherWidgetService
  ]
})
export class WeatherWidgetModule { }
