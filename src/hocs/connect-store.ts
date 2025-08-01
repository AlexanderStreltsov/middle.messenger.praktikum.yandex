import { StoreEvents } from '../constants';
import { type PagesDataUnionProps } from '../config';
import { type AppState } from '../core';

export function connectStore(
  mapStateToProps: (state: AppState) => Partial<AppState>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (Component: new (props: PagesDataUnionProps) => any) {
    return class extends Component {
      private onChangeStoreCallback: () => void;

      constructor(props: PagesDataUnionProps) {
        const store = window.store;
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (JSON.stringify(newState) !== JSON.stringify(state)) {
            this.setProps(newState);
            state = newState;
          }
        };

        store.on(StoreEvents.UPDATED, this.onChangeStoreCallback);
      }

      componentWillUnmount = () => {
        super.componentWillUnmount?.();
        window.store.off(StoreEvents.UPDATED, this.onChangeStoreCallback);
      };
    };
  };
}
