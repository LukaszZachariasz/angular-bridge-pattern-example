import {StoreState} from '../state/store-state';
import {Store} from '../store';
import {StoreSelector} from './selector';


export function createSelector<T, Q extends StoreState = any, Z extends Store<Q> = any>(name: string, selector: StoreSelector<T, Q, Z>): StoreSelector<T, Q, Z> {
  (selector as any).selectorName = name;
  return selector;
}
