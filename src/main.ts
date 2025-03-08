import { PAGES_DATA, PagesNames, type PagesDataUnionProps } from './constants';
import './styles/style.css';

const navigate = (page: PagesNames) => {
  const container = document.getElementById('app')!;
  container!.innerHTML = '';

  const { template: Page, props } = PAGES_DATA[page];
  const source = new Page(props as PagesDataUnionProps).getContent();

  if (source) {
    container!.appendChild(source);
  }
};

document.addEventListener('click', (evt) => {
  const page = (evt.target as HTMLElement).getAttribute(
    'page',
  ) as PagesNames | null;

  if (page && PagesNames[page]) {
    navigate(page);

    evt.preventDefault();
    evt.stopImmediatePropagation();
  }
});

document.addEventListener('DOMContentLoaded', () =>
  navigate(PagesNames.navigate),
);
