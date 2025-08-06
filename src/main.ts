import { APP_ROOT_ELEMENT, PagesNames, StoreEvents } from './constants';
import { type PagesDataUnionProps, PAGES_CONFIG } from './config';
import { Router, Store, DEFAULT_STATE } from './core';
import './styles/style.css';

window.router = new Router(APP_ROOT_ELEMENT);
window.store = new Store(DEFAULT_STATE);

const { router, store } = window;
store.on(StoreEvents.UPDATED, () => {});

for (const key in PAGES_CONFIG) {
  const { route, template, props } = PAGES_CONFIG[key as PagesNames];
  router.use(route, template, props as PagesDataUnionProps);
}

router.start();
