import { HTMLElements, EventNames } from '../../constants';
import { Form, type InputFieldProps, Spinner } from '../../components';
import { Block, type BlockProps, type AppState } from '../../core';
import { connectStore } from '../../hocs';
import {
  changeFormField,
  blurFormField,
  getFormStateValidated,
} from '../../utils';
import type { ModalProps } from './modal.types';

export class Modal extends Block<HTMLDivElement, ModalProps & BlockProps> {
  constructor({ isOpen = false, ...props }: ModalProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'modal-wrapper',
      isOpen,
      isLoading: props?.isLoading ?? false,
      events: { [EventNames.CLICK]: (evt: Event) => this.closeModalClick(evt) },
      Spinner: new Spinner(),
      Form: new Form({
        ...props,
        onSubmit: (evt: Event) => {
          evt.preventDefault();
          const data = getFormStateValidated(this.children.Form as Block);
          if (!data) {
            return;
          }
          props.onSubmit?.(evt, data);
        },
        fields: props.fields.map((field) => ({
          ...field,
          classFields: props.classFields,
          inputProps: {
            attrs: { ...field.inputProps.attrs },
            events: {
              [EventNames.BLUR]: (evt: Event) => this.blurField(evt, field),
              [EventNames.CHANGE]: (evt: Event) => this.changeField(evt, field),
              [EventNames.INPUT]: (evt: Event) =>
                props?.onInputField?.(evt, field),
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
  };

  private closeModalClick = (evt: Event) => {
    const isOverlayClick = (evt.target as HTMLElement).classList.contains(
      'modal-open',
    );

    if (isOverlayClick) {
      this.closeModal(evt);
    }
  };

  closeModal = (evt: Event) => {
    const form =
      (evt.currentTarget as HTMLElement)?.querySelector('form') ||
      (evt.target as HTMLElement);

    const input = form?.querySelector('input');
    const error = form?.querySelector('.error');

    if (error) {
      error.remove();
    }

    if (input) {
      input.value = '';
    }

    this.setProps({ ...this.props, isOpen: false });
  };

  render() {
    return `
      <dialog class="modal">
        <h2>{{ title }}</h2>
        {{#if isLoading}}
          {{{ Spinner }}}
        {{else}}
          {{{ Form }}}
        {{/if}}
      </dialog>
      <div class="modal__overlay ${this.props.isOpen ? 'modal-open' : ''}"></div>
    `;
  }
}

const mapStateToProps = ({ isLoading }: AppState) => ({
  isLoading,
});

export default connectStore<ModalProps>(mapStateToProps)(Modal);
