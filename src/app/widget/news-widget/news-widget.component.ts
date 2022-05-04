import { Component } from '@angular/core';
import {NewsWidgetService} from "./news-widget.service";

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.css']
})
export class NewsWidgetComponent {
  public dailyNews$ = this.newsWidgetService.getDailyNews();
  constructor(private newsWidgetService: NewsWidgetService) { }

}
