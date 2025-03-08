import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { NavigatePageProps } from './navigate.types';

export class NavigatePage extends Block<
  HTMLElement,
  NavigatePageProps & BlockProps
> {
  constructor(props: NavigatePageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      className: 'content',
    });
  }

  render() {
    return `
      <section class="navigate-wrapper">
        <h1>Список страниц</h1>
        <nav>
          <ul>
            {{#each pages}}
              <li>
                <a href="#" page="{{ page }}">{{ title }}</a>
              </li>
            {{/each}}
          </ul>
        </nav>
      </section>
    `;
  }
}
