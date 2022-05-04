import {Component, ContentChild, InjectionToken, Input} from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export const WIDGET_INJECTION_TOKEN = new InjectionToken<Widget>('Widget token');

export interface Widget {
  reloadData: () => void;
}

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent {
  public reloadIcon = faArrowCircleDown;

  @ContentChild(WIDGET_INJECTION_TOKEN) public widget!: Widget

  @Input() headerTitle: string = ''

  public refreshData(): void {
    this.widget.reloadData();
  }
}
