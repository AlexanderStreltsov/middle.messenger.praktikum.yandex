import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROLS_SIGNIN: Record<string, ButtonProps> = {
  login: {
    label: 'Войти',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
  registration: {
    label: 'Нет аккаунта?',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
