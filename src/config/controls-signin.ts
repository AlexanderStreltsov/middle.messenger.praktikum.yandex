import { ButtonProps } from '../components';
import { NamesGoEvent, ButtonTypes, ButtonViewTypes } from '../constants';

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
    nameGoEvent: NamesGoEvent.goSignup,
  },
};
