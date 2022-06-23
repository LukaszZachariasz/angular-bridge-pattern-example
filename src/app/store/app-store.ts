import {Injectable, OnDestroy} from '@angular/core';
import {Store} from '../core/store/store';
import {AppState} from './state/app-state';

@Injectable()
export class AppStore extends Store<AppState> implements OnDestroy {

  constructor() {
    super();
    this.state = new AppState();
    this.initialize();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
