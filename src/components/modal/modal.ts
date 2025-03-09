import { HTMLElements, EventNames } from '../../constants';
import { Form, type InputFieldProps } from '../../components';
import { Block, type BlockProps } from '../../core';
import {
  changeFormField,
  blurFormField,
  submitForm,
  updateFieldError,
} from '../../utils';
import type { ModalProps } from './modal.types';

export class Modal extends Block<HTMLDivElement, ModalProps & BlockProps> {
  constructor({ isOpen = false, ...props }: ModalProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'modal-wrapper',
      isOpen,
      events: { [EventNames.CLICK]: (evt: Event) => this.closeModal(evt) },
      Form: new Form({
        ...props,
        onSubmit: (evt: Event) => submitForm(evt, this.children.Form as Block),
        fields: props.fields.map((field) => ({
          ...field,
          classFields: props.classFields,
          inputProps: {
            attrs: { ...field.inputProps.attrs },
            events: {
              [EventNames.BLUR]: (evt: Event) => this.blurField(evt, field),
              [EventNames.CHANGE]: (evt: Event) => this.changeField(evt, field),
            },
          },
        })),
      }),
    });
  }

  private blurField = (evt: Event, field: InputFieldProps) => {
    if (this.props.isBlur) {
      blurFormField(evt, this.children.Form as Block, field);
    }
  };

  private changeField = (evt: Event, field: InputFieldProps) => {
    changeFormField(evt, this.children.Form as Block, field);
    updateFieldError(
      this.children.Form as Block,
      field.inputProps.attrs.name,
      (evt.target as HTMLInputElement).value,
    );
  };

  private closeModal = (evt: Event) => {
    const isOverlayClick = (evt.target as HTMLElement).classList.contains(
      'modal-open',
    );

    if (isOverlayClick) {
      this.setProps({ ...this.props, isOpen: false });
    }
  };

  render() {
    return `
      <dialog class="modal">
        <h2>{{ title }}</h2>
        {{{ Form }}}
      </dialog>
      <div class="modal__overlay ${this.props.isOpen ? 'modal-open' : ''}"></div>
    `;
  }
}
