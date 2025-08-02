import { StoreEvents } from '../constants';
import { type PagesDataUnionProps } from '../config';
import { type AppState } from '../core';
import { isEqual } from '../utils';

export function connectStore(
  mapStateToProps: (state: AppState) => Partial<Record<string, unknown>>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (Component: new (props: any) => any) {
    return class extends Component {
      private onChangeStoreCallback: () => void;

      constructor(props: PagesDataUnionProps) {
        const store = window.store;
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(newState, state)) {
            this.setProps(newState);
            state = newState;
          }
        };

        store.on(StoreEvents.UPDATED, this.onChangeStoreCallback);
      }

      componentWillUnmount = () => {
        window.store.off(StoreEvents.UPDATED, this.onChangeStoreCallback);
      };
    };
  };
}
