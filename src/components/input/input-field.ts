import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { Input } from './input';
import type { InputFieldProps } from './input.types';

export class InputField extends Block<
  HTMLLabelElement,
  InputFieldProps & BlockProps
> {
  constructor(props: InputFieldProps) {
    super(HTMLElements.LABEL, {
      ...props,
      attrs: { for: props.inputProps.attrs.name },
      className: 'input',
      value: props.inputProps.attrs.value ?? '',
      Input: new Input(props.inputProps),
    });
  }

  render() {
    const {
      inputProps: {
        attrs: { placeholder },
      },
      error,
    } = this.props;

    return `
      {{{ Input }}}
      ${placeholder ? '' : '<div class="input__label">{{ label }}</div>'}
      ${
        error
          ? `<span class="input__error {{#if error}}error{{/if}}">
              {{ error }}
            </span>`
          : ''
      }
    `;
  }
}
