import {Component, Input} from '@angular/core';
import { faAmbulance, faArrowAltCircleDown, faArrowAltCircleRight, faArrowCircleDown, faReply, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent {
  public reloadIcon = faArrowCircleDown;

  @Input() headerTitle: string = ''

  public refreshData(): void {

  }
}
