import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WidgetModule} from "./widget/widget.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
