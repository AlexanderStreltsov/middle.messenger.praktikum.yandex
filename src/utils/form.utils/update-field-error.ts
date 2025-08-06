import { Block } from '../../core';
import type { InputProps } from '../../components';
import {
  InputNames,
  ERROR_CONFIRM_PASSWORD,
  ERROR_NEW_PASSWORD,
} from '../../constants';
import { getFieldComponent, getFieldsComponents } from './get-field-component';
import { validateField } from './validate-field';
import { getFormState } from './get-form-state';

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

const updatePassConfirmError = (form: Block) => {
  const { confirmPassword, newPassword, oldPassword, password } =
    getFormState(form);

  const newPassField = getFieldComponent(form, InputNames.NEW_PASSWORD);
  const confirmPassField = getFieldComponent(form, InputNames.PASS_CONFIRM);
  const oldPassField = getFieldComponent(form, InputNames.OLD_PASSWORD);
  const passField = getFieldComponent(form, InputNames.PASS);

  if (
    passField &&
    confirmPassField &&
    password &&
    confirmPassword &&
    password !== confirmPassword
  ) {
    setFieldError(passField, ERROR_CONFIRM_PASSWORD);
    setFieldError(confirmPassField, ERROR_CONFIRM_PASSWORD);
    return true;
  }

  if (
    newPassField &&
    confirmPassField &&
    newPassword &&
    confirmPassword &&
    newPassword !== confirmPassword
  ) {
    setFieldError(newPassField, ERROR_CONFIRM_PASSWORD);
    setFieldError(confirmPassField, ERROR_CONFIRM_PASSWORD);
    return true;
  }

  if (
    newPassField &&
    oldPassField &&
    newPassword &&
    oldPassword &&
    newPassword === oldPassword
  ) {
    setFieldError(newPassField, ERROR_NEW_PASSWORD);
    setFieldError(oldPassField, ERROR_NEW_PASSWORD);
    return true;
  }

  if (oldPassField) {
    setFieldError(oldPassField, '');
  }

  return false;
};

export const updateFieldsErrors = (form: Block) => {
  let isError = false;

  if (updatePassConfirmError(form)) {
    isError = true;
    return isError;
  }

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

export const setFieldsErrors = (
  form: Block,
  error: string,
  inputNames: InputNames[] = [],
) => {
  const fieldsComponents = getFieldsComponents(form);

  for (const fieldComponent of fieldsComponents) {
    if (inputNames.length === 0) {
      setFieldError(fieldComponent, error);
      continue;
    }

    const fieldName = (fieldComponent.getProps().inputProps as InputProps).attrs
      .name;

    if (inputNames.includes(fieldName)) {
      setFieldError(fieldComponent, error);
    }
  }
};
