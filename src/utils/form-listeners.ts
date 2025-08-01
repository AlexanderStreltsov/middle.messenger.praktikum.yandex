import { Block } from '../core';
import type { InputFieldProps } from '../components';
import { updateFieldError, updateFieldsErrors } from './update-field-error';
import { getFormState } from './get-form-state';
import { getFieldComponent } from './get-field-component';

export const changeFormField = (
  evt: Event,
  form: Block,
  field: InputFieldProps,
) => {
  const currentField = getFieldComponent(form, field.inputProps.attrs.name);

  if (currentField) {
    currentField.setProps({
      value: (evt.target as HTMLInputElement).value,
    });
  }
};

export const blurFormField = (
  evt: Event,
  form: Block,
  field: InputFieldProps,
) =>
  updateFieldError(
    form,
    field.inputProps.attrs.name,
    (evt.target as HTMLInputElement).value,
  );

export const getFormData = (evt: Event, form: Block) => {
  evt.preventDefault();

  const isError = updateFieldsErrors(form);

  if (!isError) {
    return getFormState(form);
  }
};
