import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WeatherWidgetModule} from "./widget/weather-widget/weather-widget.module";
import {NewsWidgetModule} from "./widget/news-widget/news-widget.module";
import {WidgetModule} from "./widget/widget.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
