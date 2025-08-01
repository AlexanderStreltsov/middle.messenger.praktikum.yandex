import { APP_ROOT_ELEMENT, PagesNames, StoreEvents } from './constants';
import { type PagesDataUnionProps, PAGES_CONFIG } from './config';
import { Router, Store, defaultState } from './core';
import './styles/style.css';

window.router = new Router(APP_ROOT_ELEMENT);
window.store = new Store(defaultState);

const { router, store } = window;

store.on(StoreEvents.UPDATED, (prevState, nextState) => {
  console.log('Store updated:', {
    prevState,
    nextState,
  });
});

for (const key in PAGES_CONFIG) {
  const { route, template, props } = PAGES_CONFIG[key as PagesNames];
  router.use(route, template, props as PagesDataUnionProps);
}

router.start();
