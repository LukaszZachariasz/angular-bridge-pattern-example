import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {setDailyInfoAction} from '../../store/state/weather/actions/set-daily-info';
import {AppStore} from '../../store/app-store';

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

  constructor(private store: AppStore) {
  }

  public loadDataFromApi() {
    this.isWeatherLoading$.next(true);


    this.isWeatherLoading$.next(false);
    this.store.do(setDailyInfoAction({
      avgTemp: 23.2,
      tempUnit: TempUnitEnum.CELCIUS
    }))

  }
}
