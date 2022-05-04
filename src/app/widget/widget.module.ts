import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherWidgetModule} from "./weather-widget/weather-widget.module";
import {NewsWidgetModule} from "./news-widget/news-widget.module";
import {WidgetComponent} from './widget/widget.component';


@NgModule({
  imports: [
    CommonModule,
    WeatherWidgetModule,
    NewsWidgetModule
  ],
  exports: [
    WeatherWidgetModule,
    NewsWidgetModule,
    WidgetComponent
  ],
  declarations: [
    WidgetComponent
  ]
})
export class WidgetModule {
}
