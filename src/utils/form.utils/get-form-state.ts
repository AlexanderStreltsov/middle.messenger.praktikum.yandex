import { Block } from '../../core';
import { InputNames } from '../../constants';
import type { InputProps } from '../../components';
import { getFieldsComponents } from './get-field-component';
import { updateFieldsErrors } from './update-field-error';

export type FormState = {
  [key in InputNames]?: string | FormData;
};

export const getFormState = (form: Block): FormState =>
  getFieldsComponents(form).reduce<FormState>((acc, fieldComponent) => {
    const fieldProps = fieldComponent.getProps();
    const { name } = (fieldProps.inputProps as InputProps).attrs;

    acc[name] = (fieldProps.value as string | FormData) ?? '';

    return acc;
  }, {});

export const getFormStateValidated = (form: Block) => {
  const isError = updateFieldsErrors(form);

  if (!isError) {
    return getFormState(form);
  }
};
