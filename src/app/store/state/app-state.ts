import {StoreState} from '../../core/store/state/store-state';
import {WeatherState} from './weather/weather-state';


export class AppState extends StoreState{
  public weatherState = new WeatherState();
}
