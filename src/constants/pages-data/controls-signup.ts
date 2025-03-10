import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROLS_SIGNUP: Record<string, ButtonProps> = {
  registration: {
    label: 'Зарегистрироваться',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
  login: {
    label: 'Войти',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
