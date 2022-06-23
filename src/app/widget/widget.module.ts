import {NgModule} from '@angular/core';
import {WidgetContainerComponent} from './widget-container/widget-container.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NewsWidgetService} from './news-widget/news-widget.service';
import {WeatherWidgetService} from './weather-widget/weather-widget.service';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {NewsWidgetComponent} from './news-widget/news-widget.component';
import {CommonModule} from '@angular/common';
import {AppStore} from '../store/app-store';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS = [
  WeatherWidgetComponent,
  NewsWidgetComponent,
  WidgetContainerComponent
]

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    NewsWidgetService,
    WeatherWidgetService,
    AppStore
  ]
})
export class WidgetModule {
}
