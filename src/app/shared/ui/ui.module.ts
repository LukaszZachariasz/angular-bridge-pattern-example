import {NgModule} from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const COMPONENTS = [
  IconComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    TitleCasePipe
  ]
})
export class UiModule {
}
