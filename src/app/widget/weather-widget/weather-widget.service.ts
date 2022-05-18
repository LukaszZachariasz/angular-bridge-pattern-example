import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, EMPTY, map, merge, Observable, of, Subject } from 'rxjs';
import { DailyNews } from '../news-widget/news-widget.service';

export interface WeatherDailyInfo {
  avgTemp: number;
  tempUnit: TempUnitEnum;
}

export enum TempUnitEnum {
  CELCIUS = '°C',
  FAHRENHEIT = '°F',
}

@Injectable()
export class WeatherWidgetService {
  public isWeatherLoading$ = new BehaviorSubject<boolean>(false);
  public weatherDailyInfo$ = new BehaviorSubject<WeatherDailyInfo>({
    avgTemp: 23.2,
    tempUnit: TempUnitEnum.CELCIUS,
  });

  public getCurrentTempFromSensor() {
    this.weatherDailyInfo$.next(null!);
    this.isWeatherLoading$.next(true);

    setTimeout(() => {
      this.isWeatherLoading$.next(false);
      this.weatherDailyInfo$.next({
        avgTemp: 23.2,
        tempUnit: TempUnitEnum.CELCIUS,
      });
    }, 3000);
  }
}
