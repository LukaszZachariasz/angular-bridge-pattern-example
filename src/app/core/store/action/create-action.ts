import {StoreState} from '../state/store-state';
import {Store} from '../store';
import {StoreAction} from './action';


export function createAction<T extends StoreState = any, Q extends Store<T> = any>(name: string, action: StoreAction<T, Q>): StoreAction<T, Q>  {
  (action as any).actionName = name;
  return action;
}
