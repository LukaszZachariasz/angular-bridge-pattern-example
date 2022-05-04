import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherWidgetModule} from "./weather-widget/weather-widget.module";
import {NewsWidgetModule} from "./news-widget/news-widget.module";
import {WidgetContainerComponent} from './widget-container/widget-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    WeatherWidgetModule,
    NewsWidgetModule,
    FontAwesomeModule
  ],
  exports: [
    WeatherWidgetModule,
    NewsWidgetModule,
    WidgetContainerComponent
  ],
  declarations: [
    WidgetContainerComponent
  ]
})
export class WidgetModule {
}
