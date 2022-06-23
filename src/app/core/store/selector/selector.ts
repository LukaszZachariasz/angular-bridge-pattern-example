import {StoreState} from '../state/store-state';
import {Store} from '../store';


export type StoreSelector<T, Q extends StoreState = any, Z extends Store<Q> = any> = (state: Q, store: Z) => T;
