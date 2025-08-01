import { StoreEvents } from '../../constants';
import { EventBus } from '../event-bus';
import type { AppState, StoreBase } from './store.types';

export class Store
  extends EventBus<StoreEvents, Partial<AppState>>
  implements StoreBase
{
  private static __instance: Store;
  private state: AppState = {} as AppState;

  constructor(defaultState: AppState) {
    if (Store.__instance) {
      return Store.__instance;
    }

    super();
    this.state = defaultState;

    Store.__instance = this;
  }

  public getState = (): AppState => this.state;

  public set = (nextState: Partial<AppState>) => {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...nextState };
    this.emit(StoreEvents.UPDATED, prevState, nextState);
  };
}
