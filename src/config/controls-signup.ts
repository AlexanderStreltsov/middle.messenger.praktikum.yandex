import { ButtonProps } from '../components';
import { NamesGoEvent, ButtonTypes, ButtonViewTypes } from '../constants';

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
    nameGoEvent: NamesGoEvent.goSignin,
  },
};
