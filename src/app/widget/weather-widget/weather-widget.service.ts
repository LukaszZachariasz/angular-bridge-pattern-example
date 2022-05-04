import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

export interface WeatherDailyInfo {
  avgTemp: number;
  tempUnit: string;
}

@Injectable()
export class WeatherWidgetService {

  public getDailyWeatherInfo(): Observable<WeatherDailyInfo> {
    return of({
      avgTemp: 26.3,
      tempUnit: 'C'
    }).pipe(delay(3000))
  }
}
