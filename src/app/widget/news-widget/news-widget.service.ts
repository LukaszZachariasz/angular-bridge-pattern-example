import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, delay, EMPTY, map, merge, Observable, of, repeatWhen, Subject, tap} from "rxjs";
import { WeatherDailyInfo } from '../weather-widget/weather-widget.service';

export interface DailyNews {
  title: string;
  description: string;
}

@Injectable()
export class NewsWidgetService {
  public isNewsLoading$ = new BehaviorSubject<boolean>(false);
  public dailyNews$ = new BehaviorSubject<DailyNews[]>([]);

  public reloadData() {
    this.dailyNews$.next([])
    this.isNewsLoading$.next(true);

    setTimeout(() => {
      this.isNewsLoading$.next(false);
      this.dailyNews$.next([
        {
          title: 'Somebody is death',
          description: 'Nobody know how this happened and where this happened'
        },
        {
          title: 'Angular 13!',
          description: 'Somebody tells me that this is the best framework'
        },
        {
          title: 'Today news',
          description: 'Finally new framework'
        },
        {
          title: 'Best tech',
          description: 'Today about new tech'
        }
      ])
    }, 3000)
  }

}
