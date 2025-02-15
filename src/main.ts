import Handlebars from 'handlebars';

import * as Components from './components';
import { PAGES_DATA, PagesNames } from './constants';
import * as Layout from './layout';

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

document.addEventListener('click', (evt) => {
  evt.preventDefault();
  evt.stopImmediatePropagation();

  const page = (evt.target as HTMLElement).getAttribute(
    'page'
  ) as PagesNames | null;

  if (page && PagesNames[page]) {
    navigate(page);
  }
});

document.addEventListener('DOMContentLoaded', () =>
  navigate(PagesNames.navigate)
);
