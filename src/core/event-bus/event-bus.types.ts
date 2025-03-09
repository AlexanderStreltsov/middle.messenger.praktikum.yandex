export type Listener<T> = (props?: T) => void;

export interface EventBusBase<E extends string, T> {
  on: (evt: E, fn: Listener<T>) => void;
  off: (evt: E, fn: Listener<T>) => void;
  emit: (evt: E, props?: T) => void;
}
