import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsWidgetService} from "./news-widget.service";
import { NewsWidgetComponent } from './news-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    NewsWidgetComponent
  ],
  exports: [
    NewsWidgetComponent,
    FontAwesomeModule
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NewsWidgetService
  ]
})
export class NewsWidgetModule { }
