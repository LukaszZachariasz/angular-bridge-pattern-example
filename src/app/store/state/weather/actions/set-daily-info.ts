import {WeatherDailyInfo} from '../../../../widget/weather-widget/weather-widget.service';
import {createAction} from '../../../../core/store/action/create-action';


export const setDailyInfoAction = (dailyInfo: WeatherDailyInfo) => createAction(
  'setDailyInfoAction',
  (state) => {
    state.weatherState.weatherDaily$.next(dailyInfo);
  }
)
