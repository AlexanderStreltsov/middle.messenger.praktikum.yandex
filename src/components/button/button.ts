import {
  ButtonViewTypes,
  ButtonTypes,
  EventNames,
  HTMLElements,
} from '../../constants';
import { Block, type BlockProps } from '../../core';
import type { ButtonProps } from './button.types';

export class Button extends Block<HTMLButtonElement, ButtonProps & BlockProps> {
  constructor({ typeView = ButtonViewTypes.PRIMARY, ...props }: ButtonProps) {
    super(HTMLElements.BUTTON, {
      ...props,
      className:
        `button button__${typeView}` +
        `${props?.className ? ' ' + props?.className : ''}`,
      events: {
        [EventNames.CLICK]: (evt) => {
          if (props.attrs.type === ButtonTypes.SUBMIT) {
            evt.preventDefault();

            const form = (evt.currentTarget as HTMLElement).closest(
              HTMLElements.FORM,
            );

            if (form) {
              form.dispatchEvent(new Event(EventNames.SUBMIT));
            }
          }

          if (props.onClick) {
            props.onClick(evt);
          }
        },
      },
    });
  }

  render() {
    return '{{ label }}';
  }
}
