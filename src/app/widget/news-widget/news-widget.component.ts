import { Component } from '@angular/core';
import { Widget, WIDGET_INJECTION_TOKEN } from '../widget-container/widget-container.component';
import { NewsWidgetService } from './news-widget.service';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.css'],
  providers: [
    {
      provide: WIDGET_INJECTION_TOKEN,
      useExisting: NewsWidgetComponent,
    }
  ]
})
export class NewsWidgetComponent implements Widget {
  public dailyNews$ = this.newsWidgetService.dailyNews$;
  public isLoading$ = this.newsWidgetService.isNewsLoading$;

  constructor(private newsWidgetService: NewsWidgetService) {}

  public reloadData() {
    this.newsWidgetService.reloadData();
  }
}
