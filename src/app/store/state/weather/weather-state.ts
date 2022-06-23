import {BehaviorSubject} from 'rxjs';
import {WeatherDailyInfo} from '../../../widget/weather-widget/weather-widget.service';


export class WeatherState {
  public weatherDaily$ = new BehaviorSubject<WeatherDailyInfo>(null!);
}
