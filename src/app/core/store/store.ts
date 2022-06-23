import {Injectable, OnDestroy} from '@angular/core';
import {StoreState} from './state/store-state';
import {StoreAction} from './action/action';
import {StoreSelector} from './selector/selector';


@Injectable()
export abstract class Store<T extends StoreState = any> implements OnDestroy {
  public state!: T;


  public initialize(): void {
    this.state.initialize(this);
  }

  public select<T>(selector: StoreSelector<T>): T {
    return selector(this.state, this)
  }

  public do(action: StoreAction<T, Store<T>>): void {
    action(this.state, this);
    this.state.actionEffect();
  }

  public ngOnDestroy() {
    this.state.destroy();
  }
}
