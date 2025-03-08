import { Button } from '../../components';
import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { ErrorPageProps } from './error.types';

export class ErrorPage extends Block<HTMLElement, ErrorPageProps & BlockProps> {
  constructor(props: ErrorPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      className: 'content',
      Button: new Button(props.control),
    });
  }

  render() {
    return `
      <section class="error-wrapper">
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
        {{{ Button }}}
      </section>
    `;
  }
}
