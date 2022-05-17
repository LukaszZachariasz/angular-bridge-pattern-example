import { Component, ContentChild, InjectionToken, Input, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { NewsWidgetComponent } from '../news-widget/news-widget.component';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css'],
})
export class WidgetContainerComponent implements OnInit {
  public reloadIcon = faArrowCircleDown;

  @ContentChild(WeatherWidgetComponent)
  public weatherWidget!: WeatherWidgetComponent;

  @ContentChild(NewsWidgetComponent)
  public newsWidget!: NewsWidgetComponent;

  @Input() headerTitle: string = '';

  public ngOnInit(): void {
    //preloading something?

    if (this.weatherWidget) {
      this.weatherWidget.preloadSomething;
    }
  }

  public refreshData(): void {
    if (this.weatherWidget) {
      this.weatherWidget.refreshData();
    }

    if (this.newsWidget) {
      this.newsWidget.reloadNewsData();
    }

    // TODO: next widgets?
    // if (this.newsWidget) {
    //   this.newsWidget.reloadNewsData();
    // }
  }
}
