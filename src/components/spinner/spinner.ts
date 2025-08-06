import { HTMLElements } from '../../constants';
import { Block, type BlockProps } from '../../core';

export class Spinner extends Block<HTMLButtonElement, BlockProps> {
  constructor() {
    super(HTMLElements.DIV, { className: 'spinner' });
  }

  render() {
    return '<i class="spinner__icon"></i>';
  }
}
