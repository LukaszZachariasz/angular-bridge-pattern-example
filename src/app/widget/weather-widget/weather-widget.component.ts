import { Component } from '@angular/core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { Widget, WIDGET_TOKEN } from '../widget-container/widget-container.component';
import { WeatherWidgetService } from './weather-widget.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget {
  public static weatherComponentNo = 0;
  public faCloudSunRain = faCloudSunRain;

  public no = 0;

  public isWeatherLoading$ = this.weatherWidgetService.isWeatherLoading$;
  public dailyWeatherInfo$ = this.weatherWidgetService.weatherDailyInfo$;

  constructor(private weatherWidgetService: WeatherWidgetService) {
    this.no = ++WeatherWidgetComponent.weatherComponentNo;
  }

  public preload(): void {
    console.log('preloading WeatherWidgetComponent');
  }

  public refresh() {
    this.weatherWidgetService.getCurrentTempFromSensor();
  }
}
