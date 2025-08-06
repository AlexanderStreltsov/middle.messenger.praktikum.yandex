import type { SignInData, SignUpData } from '../../api';
import { Form, Spinner } from '../../components';
import { HTMLElements, EventNames, PagesNames } from '../../constants';
import { Block, type BlockProps, type AppState } from '../../core';
import { connectStore, withRouter } from '../../hocs';
import * as AuthServices from '../../services/auth';
import { getGoEvent } from '../../utils';
import {
  changeFormField,
  blurFormField,
  getFormStateValidated,
} from '../../utils';
import type { AuthPageProps } from './auth.types';

export class AuthPage extends Block<HTMLElement, AuthPageProps & BlockProps> {
  constructor(props: AuthPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      isLoading: props?.isLoading ?? false,
      className: 'content',
      Spinner: new Spinner(),
      Form: new Form({
        ...props,
        classFields: 'auth-form__fields',
        classControls: 'auth-form__controls',
        onSubmit: (evt: Event) => this.submit(evt, props.name),
        fields: props.fields.map((field) => ({
          ...field,
          inputProps: {
            attrs: { ...field.inputProps.attrs },
            events: {
              [EventNames.BLUR]: (evt: Event) =>
                blurFormField(evt, this.children.Form as Block, field),
              [EventNames.CHANGE]: (evt: Event) =>
                changeFormField(evt, this.children.Form as Block, field),
            },
          },
        })),
        controls: props.controls.map((control) => ({
          ...control,
          onClick: getGoEvent(control.nameGoEvent, props.router),
        })),
      }),
    });
  }

  private submit = (evt: Event, name: PagesNames) => {
    evt.preventDefault();

    const form = this.children.Form as Block;
    const data = getFormStateValidated(form);

    if (!data) {
      return;
    }

    if (name === PagesNames.signin) {
      AuthServices.signIn(data as SignInData, form);
    }

    if (name === PagesNames.signup) {
      AuthServices.signUp(data as SignUpData, form);
    }
  };

  render() {
    return `
      <section class="auth-form">
        <div class="auth-form__box">
          <h1>{{ title }}</h1>
          {{#if isLoading}}
            {{{ Spinner }}}
          {{else}}
            {{{ Form }}}
          {{/if}}
        </div>
      </section>
    `;
  }
}

const mapStateToProps = ({ isLoading }: AppState) => ({
  isLoading,
});

export default connectStore<AuthPageProps>(mapStateToProps)(
  withRouter(AuthPage),
);
