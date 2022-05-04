import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsWidgetService} from "./news-widget.service";
import { NewsWidgetComponent } from './news-widget.component';


@NgModule({
  declarations: [
    NewsWidgetComponent
  ],
  exports: [
    NewsWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NewsWidgetService
  ]
})
export class NewsWidgetModule { }
