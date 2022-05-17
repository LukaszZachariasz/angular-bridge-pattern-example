import { Component } from '@angular/core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { WeatherWidgetService } from './weather-widget.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent {
  public faCloudSunRain = faCloudSunRain;

  public isWeatherLoading$ = this.weatherWidgetService.isWeatherLoading$;
  public dailyWeatherInfo$ = this.weatherWidgetService.weatherDailyInfo$;

  constructor(private weatherWidgetService: WeatherWidgetService) {}

  public preloadSomething(): void {
    console.log('preloading');
  }

  public refreshData() {
    const aaa = 'asda';
    this.weatherWidgetService.loadDataFromApi();
  }
}
