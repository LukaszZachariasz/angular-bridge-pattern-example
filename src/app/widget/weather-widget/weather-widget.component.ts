import { Component } from '@angular/core';
import { WeatherWidgetService } from './weather-widget.service';
import {AppStore} from '../../store/app-store';
import {dailyInfoSelector} from '../../store/state/weather/selectors/daily-info.selector';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent {
  public isWeatherLoading$ = this.weatherWidgetService.isWeatherLoading$;
  public dailyWeatherInfo$ = this.store.select(dailyInfoSelector());

  constructor(private weatherWidgetService: WeatherWidgetService,
              private store: AppStore) {
  }

  public preloadSomething(): void {
  }

  public refreshData() {
    this.weatherWidgetService.loadDataFromApi();
  }
}
