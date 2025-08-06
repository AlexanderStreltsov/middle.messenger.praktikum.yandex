export type Listener<T> = (...args: T[]) => void;

export interface EventBusBase<E extends string, T> {
  on: (evt: E, fn: Listener<T>) => void;
  off: (evt: E, fn: Listener<T>) => void;
  emit: (evt: E, ...args: T[]) => void;
}
