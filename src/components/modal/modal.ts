import { HTMLElements, EventNames } from '../../constants';
import { Form, type InputFieldProps, Spinner } from '../../components';
import { Block, type BlockProps, type AppState } from '../../core';
import { connectStore } from '../../hocs';
import {
  changeFormField,
  blurFormField,
  getFormStateValidated,
  updateFieldError,
} from '../../utils';
import type { ModalProps } from './modal.types';

export class Modal extends Block<HTMLDivElement, ModalProps & BlockProps> {
  constructor({ isOpen = false, ...props }: ModalProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'modal-wrapper',
      isOpen,
      isLoading: props?.isLoading ?? false,
      events: { [EventNames.CLICK]: (evt: Event) => this.closeModal(evt) },
      Spinner: new Spinner(),
      Form: new Form({
        ...props,
        onSubmit: (evt: Event) => {
          evt.preventDefault();
          const data = getFormStateValidated(this.children.Form as Block);
          if (!data) {
            return;
          }
          props.onSubmit?.(data);
        },
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
      const form = (evt.currentTarget as HTMLElement).querySelector('form');
      const input = form?.querySelector('input');

      if (input) {
        input.value = '';
      }

      this.setProps({ ...this.props, isOpen: false });
    }
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

const ModalWithStore = connectStore(mapStateToProps)(Modal) as unknown as new (
  props: ModalProps,
) => Block & Modal;

export default ModalWithStore;
