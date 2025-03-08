import { EventNames, HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { Button } from '../button';
import { InputField } from '../input';
import { InputRowField } from '../input-row';
import type { FormProps } from './form.types';

export class Form extends Block<HTMLFormElement, FormProps & BlockProps> {
  constructor(props: FormProps) {
    super(HTMLElements.FORM, {
      ...props,
      events: { [EventNames.SUBMIT]: props.onSubmit },
      fieldsComponents: props.fields.map((field) =>
        props.isInputRow ? new InputRowField(field) : new InputField(field),
      ),
      controlsComponents: props.controls.map((control) => new Button(control)),
    });
  }

  render() {
    return `
      <fieldset class="form-fieldset {{ classFields }}">
        {{#each fieldsComponents}}
          {{{ this }}}
        {{/each}}
      </fieldset>
      <fieldset class="form-fieldset {{ classControls }}">
        {{#each controlsComponents}}
          {{{ this }}}
        {{/each}}
      </fieldset>
    `;
  }
}
