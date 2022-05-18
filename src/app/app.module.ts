import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetModule, FontAwesomeModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'STRING_TOKEN',
      useValue: 'Jestem useValue STRING_TOKEN',
    },
  ],
})
export class AppModule {
  constructor(@Inject('STRING_TOKEN') public STRING_TOKEN: string) {
    console.log(STRING_TOKEN);
  }
}
