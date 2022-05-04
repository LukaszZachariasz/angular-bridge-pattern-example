import { Component } from '@angular/core';
import { faCloudSunRain, faCoffee, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import {WeatherWidgetService} from "./weather-widget.service";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
  public faCloudSunRain = faCloudSunRain;

  public dailyWeatherInfo$ = this.weatherWidgetService.getDailyWeatherInfo();

  constructor(private weatherWidgetService: WeatherWidgetService) { }
}
