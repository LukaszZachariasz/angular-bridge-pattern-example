import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface DailyNews {
  title: string;
  description: string;
}

@Injectable()
export class NewsWidgetService {
  public getDailyNews(): Observable<DailyNews[]> {
    return of([
      {
        title: 'Somebody is death',
        description: 'Nobody know how this happened and where this happened'
      },
      {
        title: 'Angular 13!',
        description: 'Somebody tells me that this is the best framework'
      }
    ])
  }
}
