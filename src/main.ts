import {
  APP_ROOT_ELEMENT,
  PAGES_DATA,
  PagesNames,
  type PagesDataUnionProps,
} from './constants';
import { Router } from './core';
import './styles/style.css';

window.router = new Router(APP_ROOT_ELEMENT);

for (const key in PAGES_DATA) {
  const { route, template, props } = PAGES_DATA[key as PagesNames];
  window.router.use(route, template, props as PagesDataUnionProps);
}

window.router.start();
