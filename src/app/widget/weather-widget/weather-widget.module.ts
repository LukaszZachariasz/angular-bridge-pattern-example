import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherWidgetService} from "./weather-widget.service";
import {WeatherWidgetComponent} from "./weather-widget.component";


@NgModule({
  declarations: [
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherWidgetComponent
  ],
  providers: [
    WeatherWidgetService
  ]
})
export class WeatherWidgetModule { }
