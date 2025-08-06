import type { EventBusBase, Listener } from './event-bus.types';

export class EventBus<E extends string, T> implements EventBusBase<E, T> {
  private readonly listeners: Partial<Record<E, Listener<T>[]>>;

  constructor() {
    this.listeners = {};
  }

  public on = (evt: E, fn: Listener<T>): void => {
    if (!this.listeners[evt]) {
      this.listeners[evt] = [];
    }
    this.listeners[evt].push(fn);
  };

  public off = (evt: E, fn: Listener<T>): void => {
    if (!this.listeners[evt]) {
      throw new Error(`Нет события: ${evt}`);
    }
    this.listeners[evt] = this.listeners[evt].filter(
      (listener) => listener !== fn,
    );
  };

  public emit = (evt: E, ...args: T[]): void => {
    if (!this.listeners[evt]) {
      throw new Error(`Нет события: ${evt}`);
    }
    this.listeners[evt].forEach((listener) => listener(...args));
  };
}
