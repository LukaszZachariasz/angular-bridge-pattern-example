import { Component } from '@angular/core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { Widget, WIDGET_INJECTION_TOKEN } from '../widget-container/widget-container.component';
import { WeatherWidgetService } from './weather-widget.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [
    {
      provide: WIDGET_INJECTION_TOKEN,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget {
  public faCloudSunRain = faCloudSunRain;

  public isWeatherLoading$ = this.weatherWidgetService.isWeatherLoading$;
  public dailyWeatherInfo$ = this.weatherWidgetService.weatherDailyInfo$;

  constructor(private weatherWidgetService: WeatherWidgetService) {}

  public reloadData() {
    const aaa = 'asda';
    this.weatherWidgetService.loadDataFromApi();
  }
}
