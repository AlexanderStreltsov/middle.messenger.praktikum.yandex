import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { InputProps } from './input.types';

export class Input extends Block<HTMLInputElement, InputProps & BlockProps> {
  constructor(props: InputProps) {
    super(HTMLElements.INPUT, {
      ...props,
      className: 'input__element',
      attrs: {
        ...props.attrs,
        placeholder: props.attrs.placeholder ?? '',
        autocomplete: 'off',
        id: props.attrs.name,
      },
    });
  }

  render() {
    return '';
  }
}
