import Handlebars from 'handlebars';

import * as Components from './components';
import { PAGES_DATA, PAGES_NAMES } from './constants';
import * as Layout from './layout';
import type { PagesNames } from './types';

import './styles/style.css';

Object.entries({ ...Components, ...Layout }).forEach(([name, template]) =>
  Handlebars.registerPartial(name, template)
);

const navigate = (page: PagesNames) => {
  const container = document.getElementById('app')!;
  const { template: pageTemplate, data } = PAGES_DATA[page];
  const template = Handlebars.compile<typeof data>(pageTemplate);
  container.innerHTML = template(data);
};

document.addEventListener('DOMContentLoaded', () => navigate('navigate'));

document.addEventListener('click', (evt) => {
  const page = (evt.target as HTMLElement).getAttribute(
    'page'
  ) as PagesNames | null;

  if (page && PAGES_NAMES[page]) {
    navigate(page);

    evt.preventDefault();
    evt.stopImmediatePropagation();
  }
});
