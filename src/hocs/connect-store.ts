import { StoreEvents } from '../constants';
import { type PagesDataUnionProps } from '../config';
import { type AppState } from '../core';
import { isEqual } from '../utils';

export function connectStore<P extends object = PagesDataUnionProps>(
  mapStateToProps: (state: AppState) => Partial<P>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <T extends new (props: P) => any>(
    Component: T,
  ): new (props: P) => InstanceType<T> {
    //@ts-expect-error switch-off-mixin-constructor
    return class extends Component {
      private onChangeStoreCallback: () => void;

      constructor(props: P) {
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
