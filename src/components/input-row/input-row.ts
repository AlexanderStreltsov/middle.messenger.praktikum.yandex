import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { InputProps } from '../input';

export class InputRow extends Block<HTMLInputElement, InputProps & BlockProps> {
  constructor(props: InputProps) {
    super(HTMLElements.INPUT, {
      ...props,
      className: 'input-row__element',
      attrs: {
        ...props.attrs,
        autocomplete: 'off',
        id: props.attrs.name,
      },
    });
  }

  render() {
    return '';
  }
}
