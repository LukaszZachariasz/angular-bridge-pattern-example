import {createSelector} from '../../../../core/store/selector/create-selector';
import {StoreSelector} from '../../../../core/store/selector/selector';
import {WeatherDailyInfo} from '../../../../widget/weather-widget/weather-widget.service';
import {Observable} from 'rxjs';


export const dailyInfoSelector = (): StoreSelector<Observable<WeatherDailyInfo>> =>createSelector(
  'Daily Info Selector',
  (state) => {
    return state.weatherState.weatherDaily$.asObservable();
  }
)
