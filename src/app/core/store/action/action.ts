import {StoreState} from '../state/store-state';
import {Store} from '../store';


export type StoreAction<T extends StoreState = any, Q extends Store<T> = any> = (state: T, store: Q) => void;
