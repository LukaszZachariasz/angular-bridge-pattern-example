import { Component } from '@angular/core';
import { NewsWidgetService } from './news-widget.service';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.css'],
})
export class NewsWidgetComponent {
  public dailyNews$ = this.newsWidgetService.dailyNews$;
  public isLoading$ = this.newsWidgetService.isNewsLoading$;

  constructor(private newsWidgetService: NewsWidgetService) {}

  public reloadNewsData() {
    this.newsWidgetService.reloadData();
  }
}
