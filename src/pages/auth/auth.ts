import { Form } from '../../components';
import { HTMLElements, EventNames } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { changeFormField, blurFormField, submitForm } from '../../utils';
import type { AuthPageProps } from './auth.types';

export class AuthPage extends Block<HTMLElement, AuthPageProps & BlockProps> {
  constructor(props: AuthPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      className: 'content',
      Form: new Form({
        ...props,
        classFields: 'auth-form__fields',
        classControls: 'auth-form__controls',
        onSubmit: (evt: Event) => submitForm(evt, this.children.Form as Block),
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
      }),
    });
  }

  render() {
    return `
      <section class="auth-form">
        <div class="auth-form__box">
          <h1>{{ title }}</h1>
          {{{ Form }}}
        </div>
      </section>
    `;
  }
}
