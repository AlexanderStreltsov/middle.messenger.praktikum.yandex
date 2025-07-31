import { Button } from '../../components';
import { HTMLElements, NamesGoEvent } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { withRouter } from '../../hocs';
import { getGoEvent } from '../../utils';
import type { ErrorPageProps } from './error.types';

export class ErrorPage extends Block<HTMLElement, ErrorPageProps & BlockProps> {
  constructor(props: ErrorPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      className: 'content',
      Button: new Button({
        ...props.control,
        onClick: getGoEvent(NamesGoEvent.goSignin, props),
      }),
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

const ErrorPageWithRouter = withRouter(ErrorPage) as unknown as new (
  props: ErrorPageProps,
) => Block & ErrorPage;

export default ErrorPageWithRouter;
