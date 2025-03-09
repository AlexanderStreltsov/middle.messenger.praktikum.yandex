import { VALIDATOR, InputNames } from '../constants';

export const validateField = (name: InputNames, value: string) => {
  if (!VALIDATOR[name]) {
    return '';
  }

  const { reg, min, max, error } = VALIDATOR[name];

  const isError =
    !reg.test(value) ||
    (max && max < value.length) ||
    (min && min > value.length);

  return isError ? error : '';
};
