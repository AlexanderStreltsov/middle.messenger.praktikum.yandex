import type { InputProps } from '../types';
import { InputNames } from './input-names';
import { InputTypes } from './input-types';

export const INPUTS_DEFAULT: Record<string, InputProps> = {
  login: {
    label: 'Логин',
    name: InputNames.LOGIN,
    type: InputTypes.TEXT,
  },
  pass: {
    label: 'Пароль',
    name: InputNames.PASS,
    type: InputTypes.PASS,
  },
  email: {
    label: 'Почта',
    name: InputNames.EMAIL,
    type: InputTypes.EMAIL,
  },
  name: {
    label: 'Имя',
    name: InputNames.FIRST_NAME,
    type: InputTypes.TEXT,
  },
  surname: {
    label: 'Фамилия',
    name: InputNames.SECOND_NAME,
    type: InputTypes.TEXT,
  },
  phone: {
    label: 'Телефон',
    name: InputNames.PHONE,
    type: InputTypes.TEL,
  },
  passConfirm: {
    label: 'Пароль (ещё раз)',
    name: InputNames.PASS_CONFIRM,
    type: InputTypes.PASS,
  },
  displayName: {
    label: 'Имя в чате',
    name: InputNames.DISPLAY_NAME,
    type: InputTypes.TEXT,
  },
  oldPass: {
    label: 'Старый пароль',
    name: InputNames.OLD_PASSWORD,
    type: InputTypes.PASS,
  },
  newPass: {
    label: 'Новый пароль',
    name: InputNames.NEW_PASSWORD,
    type: InputTypes.PASS,
  },
  newPassConfirm: {
    label: 'Повторите новый пароль',
    name: InputNames.PASS_CONFIRM,
    type: InputTypes.PASS,
  },
  search: {
    label: 'Поиск',
    placeholder: 'Поиск',
    name: InputNames.SEARCH,
    type: InputTypes.SEARCH,
  },
  message: {
    label: 'Сообщение',
    placeholder: 'Сообщение',
    name: InputNames.MESSAGE,
    type: InputTypes.TEXT,
  },
};
