import { NgModule } from '@angular/core';
import {UiModule} from './ui/ui.module';



@NgModule({
  exports: [
    UiModule
  ]
})
export class SharedModule { }
