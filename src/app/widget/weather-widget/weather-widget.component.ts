import { Component } from '@angular/core';
import {WeatherWidgetService} from "./weather-widget.service";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
  public dailyWeatherInfo$ = this.weatherWidgetService.getDailyWeatherInfo();

  constructor(private weatherWidgetService: WeatherWidgetService) { }
}
