import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { InputFieldProps } from '../input';
import { InputRow } from './input-row';

export class InputRowField extends Block<
  HTMLDivElement,
  InputFieldProps & BlockProps
> {
  constructor(props: InputFieldProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'input-row',
      value: props.inputProps.attrs.value ?? '',
      InputRow: new InputRow(props.inputProps),
    });
  }

  render() {
    return `
      <label for={{ inputProps.attrs.name }} class="input-row__label">
        {{ label }}
      </label>
      {{{ InputRow }}}
      ${
        this.props.error
          ? `<span class="input-row__error {{#if error}}error{{/if}}">
              {{ error }}
            </span>`
          : ''
      }
    `;
  }
}
