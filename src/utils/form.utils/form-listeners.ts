import { Block } from '../../core';
import type { InputFieldProps } from '../../components';
import { updateFieldError } from './update-field-error';
import { getFieldComponent } from './get-field-component';

export const changeFormField = (
  evt: Event,
  form: Block,
  field: InputFieldProps,
) => {
  const { files, value, name } = evt.target as HTMLInputElement;
  const currentField = getFieldComponent(form, field.inputProps.attrs.name);

  if (currentField && files) {
    const [file] = files;
    const formData = new FormData();
    formData.append(`${name}`, file);
    currentField.setProps({ value: formData });

    return;
  }

  if (currentField) {
    currentField.setProps({ value });
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
