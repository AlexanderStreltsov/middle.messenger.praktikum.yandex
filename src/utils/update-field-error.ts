import { Block } from '../core';
import type { InputProps } from '../components';
import { InputNames } from '../constants';
import { getFieldComponent, getFieldsComponents } from './get-field-component';
import { validateField } from './validate-field';

const setFieldError = (fieldComponent: Block, error: string) => {
  fieldComponent?.setProps({ error });
  fieldComponent?.setProps({ className: 'input input_error' });
};

export const updateFieldError = (
  form: Block,
  fieldName: InputNames,
  value: string,
) => {
  const fieldComponent = getFieldComponent(form, fieldName);
  const error = validateField(fieldName, value);

  if (fieldComponent) {
    setFieldError(fieldComponent, error);
  }
};

export const updateFieldsErrors = (form: Block) => {
  let isError = false;
  const fieldsComponents = getFieldsComponents(form);

  fieldsComponents.forEach((fieldComponent) => {
    const fieldName = (fieldComponent.getProps().inputProps as InputProps).attrs
      .name;

    const error = validateField(
      fieldName,
      (fieldComponent.getProps().value as string) ?? '',
    );
    setFieldError(fieldComponent, error);

    if (error) {
      isError = true;
    }
  });

  return isError;
};
