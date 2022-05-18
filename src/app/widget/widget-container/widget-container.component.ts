import { Component, ContentChild, InjectionToken, Input, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export interface Widget {
  refresh: () => void;
  preload: () => void;
}

export const WIDGET_TOKEN = new InjectionToken<Widget>('My widget');

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css'],
})
export class WidgetContainerComponent implements OnInit {
  public reloadIcon = faArrowCircleDown;

  @ContentChild(WIDGET_TOKEN)
  public widget!: Widget;

  @Input() headerTitle: string = '';

  public ngOnInit(): void {
    // abstraction control
    this.widget?.preload();
  }

  public refreshData(): void {
    // abstraction control
    this.widget.refresh();
    console.log((this.widget as any)?.no);
  }
}
