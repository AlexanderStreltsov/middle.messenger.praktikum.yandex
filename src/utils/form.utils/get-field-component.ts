import { Block } from '../../core';
import type { InputProps } from '../../components';
import { InputNames } from '../../constants';

export const getFieldsComponents = (form: Block) =>
  form.getChildren().fieldsComponents as Block[];

export const getFieldComponent = (form: Block, fieldName: InputNames) => {
  const fieldsComponents = getFieldsComponents(form);

  return fieldsComponents.find(
    (field) =>
      (field.getProps().inputProps as InputProps).attrs.name === fieldName,
  );
};
