import type { SignInData, SignUpData } from '../../api';
import { Form, Spinner } from '../../components';
import { HTMLElements, EventNames, PagesNames } from '../../constants';
import { Block, type BlockProps, type AppState } from '../../core';
import { connectStore, withRouter } from '../../hocs';
import * as Services from '../../services';
import { getGoEvent } from '../../utils';
import { changeFormField, blurFormField, getFormData } from '../../utils';
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
        onSubmit: (evt: Event) => {
          const form = this.children.Form as Block;
          const data = getFormData(evt, form);

          if (!data) {
            return;
          }

          if (props.name === PagesNames.signin) {
            Services.signIn(data as SignInData, form);
          }

          if (props.name === PagesNames.signup) {
            Services.signUp(data as SignUpData, form);
          }
        },
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

const mapStateToProps = (state: AppState) => ({
  isLoading: state.isLoading,
});

const AuthPageWithStore = connectStore(mapStateToProps)(
  withRouter(AuthPage),
) as unknown as new (props: AuthPageProps) => Block & AuthPage;

export default AuthPageWithStore;
