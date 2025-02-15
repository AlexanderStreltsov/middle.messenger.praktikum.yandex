import { ErrorPage, NavigatePage, AuthPage } from '../pages';
import type { PagesData } from '../types';
import { PagesNames } from './pages-names';
import { ButtonTypes } from './button-types';
import { InputNames } from './input-names';
import { InputTypes } from './input-types';

export const PAGES_DATA: PagesData = {
  [PagesNames.navigate]: {
    template: NavigatePage,
    data: {
      pages: [
        { page: PagesNames.signin, title: 'Логин' },
        { page: PagesNames.signup, title: 'Регистрация' },
        { page: PagesNames.error404, title: '404' },
        { page: PagesNames.error500, title: '500' },
      ],
    },
  },
  [PagesNames.signin]: {
    template: AuthPage,
    data: {
      title: 'Вход',
      inputs: [
        {
          label: 'Логин',
          type: InputTypes.TEXT,
          name: InputNames.LOGIN,
        },
        {
          label: 'Пароль',
          type: InputTypes.PASS,
          name: InputNames.PASS,
        },
      ],
      actions: [
        {
          label: 'Авторизоваться',
          type: ButtonTypes.PRIMARY,
        },
        {
          label: 'Нет аккаунта?',
          type: ButtonTypes.LINK,
        },
      ],
    },
  },
  [PagesNames.signup]: {
    template: AuthPage,
    data: {
      title: 'Регистрация',
      inputs: [
        {
          label: 'Почта',
          type: InputTypes.EMAIL,
          name: InputNames.EMAIL,
        },
        {
          label: 'Логин',
          type: InputTypes.TEXT,
          name: InputNames.LOGIN,
        },
        {
          label: 'Имя',
          type: InputTypes.TEXT,
          name: InputNames.FIRST_NAME,
        },
        {
          label: 'Фамилия',
          type: InputTypes.TEXT,
          name: InputNames.SECOND_NAME,
        },
        {
          label: 'Телефон',
          type: InputTypes.TEL,
          name: InputNames.PHONE,
        },
        {
          label: 'Пароль',
          type: InputTypes.PASS,
          name: InputNames.PASS,
        },
      ],
      actions: [
        {
          label: 'Зарегистрироваться',
          type: ButtonTypes.PRIMARY,
        },
        {
          label: 'Войти',
          type: ButtonTypes.LINK,
        },
      ],
    },
  },
  [PagesNames.error404]: {
    template: ErrorPage,
    data: {
      title: '404',
      subTitle: 'Не туда попали',
      action: {
        label: 'Назад к чатам',
        type: ButtonTypes.LINK,
      },
    },
  },
  [PagesNames.error500]: {
    template: ErrorPage,
    data: {
      title: '500',
      subTitle: 'Мы уже фиксим',
      action: {
        label: 'Назад к чатам',
        type: ButtonTypes.LINK,
      },
    },
  },
};
