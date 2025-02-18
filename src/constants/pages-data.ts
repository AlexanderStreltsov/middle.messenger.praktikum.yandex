import defaultAvatar from '../assets/icons/default.svg';
import {
  ErrorPage,
  NavigatePage,
  AuthPage,
  ProfilePage,
  ChatPage,
} from '../pages';
import type { PagesData } from '../types';
import { PagesNames } from './pages-names';
import { ButtonTypes } from './button-types';
import { INPUTS_DEFAULT } from './inputs-default';
import { ProfilePageActionsGroupType } from './profile-page-actions';
import {
  PROFILE_PAGE_NAV,
  PROFILE_EDIT_PAGE_SECTION_COMMON,
} from './profile-page-data';
import { CHAT_MESSAGES_NAV } from './chat-messages-nav';
import { ButtonArrows } from './button-arrows';
import { CHAT_MESSAGES } from './chat-messages';

export const PAGES_DATA: PagesData = {
  [PagesNames.navigate]: {
    template: NavigatePage,
    data: {
      pages: [
        { page: PagesNames.signin, title: 'Логин' },
        { page: PagesNames.signup, title: 'Регистрация' },
        { page: PagesNames.chat, title: 'Чат' },
        { page: PagesNames.profile, title: 'Профиль' },
        {
          page: PagesNames['profile-edit'],
          title: '# Профиль (изменить данные)',
        },
        {
          page: PagesNames['profile-pass-edit'],
          title: '## Профиль (изменить пароль)',
        },
        { page: PagesNames.error404, title: '404' },
        { page: PagesNames.error500, title: '500' },
      ],
    },
  },
  [PagesNames.signin]: {
    template: AuthPage,
    data: {
      title: 'Вход',
      inputs: [INPUTS_DEFAULT.login, INPUTS_DEFAULT.pass],
      actions: [
        {
          label: 'Войти',
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
        INPUTS_DEFAULT.email,
        INPUTS_DEFAULT.login,
        INPUTS_DEFAULT.name,
        INPUTS_DEFAULT.surname,
        INPUTS_DEFAULT.phone,
        INPUTS_DEFAULT.pass,
        INPUTS_DEFAULT.passConfirm,
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
  [PagesNames.chat]: {
    template: ChatPage,
    data: {
      nav: {
        action: { type: ButtonTypes.LINK, label: 'Профиль >' },
        search: INPUTS_DEFAULT.search,
        messages: CHAT_MESSAGES_NAV,
      },
      section: {
        header: {
          avatar: {
            src: defaultAvatar,
            alt: '',
          },
          name: 'Test Testovich',
        },
        messages: CHAT_MESSAGES,
        input: INPUTS_DEFAULT.message,
        action: {
          label: '',
          type: ButtonTypes.ARROW,
          arrow: ButtonArrows.RIGHT,
        },
      },
    },
  },
  [PagesNames.profile]: {
    template: ProfilePage,
    data: {
      nav: PROFILE_PAGE_NAV,
      section: {
        ...PROFILE_EDIT_PAGE_SECTION_COMMON,
        title: 'Иван',
        isShowTitle: true,
        inputs: [
          {
            ...INPUTS_DEFAULT.email,
            isDisabled: true,
            value: 'pochta@yandex.ru',
          },
          { ...INPUTS_DEFAULT.login, isDisabled: true, value: 'ivanivanov' },
          { ...INPUTS_DEFAULT.name, isDisabled: true, value: 'Иван' },
          { ...INPUTS_DEFAULT.surname, isDisabled: true, value: 'Иванов' },
          { ...INPUTS_DEFAULT.displayName, isDisabled: true, value: 'Иван' },
          {
            ...INPUTS_DEFAULT.phone,
            isDisabled: true,
            value: '+79099673030',
          },
        ],
        actions: {
          groupType: ProfilePageActionsGroupType.LIST,
          buttons: [
            {
              label: 'Изменить данные',
              type: ButtonTypes.LINK,
            },
            {
              label: 'Изменить пароль',
              type: ButtonTypes.LINK,
            },
            {
              label: 'Выйти',
              type: ButtonTypes.LINK,
              isLinkRed: true,
            },
          ],
        },
      },
    },
  },
  [PagesNames['profile-edit']]: {
    template: ProfilePage,
    data: {
      nav: PROFILE_PAGE_NAV,
      section: {
        ...PROFILE_EDIT_PAGE_SECTION_COMMON,
        inputs: [
          { ...INPUTS_DEFAULT.email, value: 'pochta@yandex.ru' },
          { ...INPUTS_DEFAULT.login, value: 'ivanivanov' },
          { ...INPUTS_DEFAULT.name, value: 'Иван' },
          { ...INPUTS_DEFAULT.surname, value: 'Иванов' },
          { ...INPUTS_DEFAULT.displayName, value: 'Иван' },
          { ...INPUTS_DEFAULT.phone, value: '+79099673030' },
        ],
      },
    },
  },
  [PagesNames['profile-pass-edit']]: {
    template: ProfilePage,
    data: {
      nav: PROFILE_PAGE_NAV,
      section: {
        ...PROFILE_EDIT_PAGE_SECTION_COMMON,
        inputs: [
          { ...INPUTS_DEFAULT.oldPass, value: '12345' },
          { ...INPUTS_DEFAULT.newPass },
          { ...INPUTS_DEFAULT.newPassConfirm },
        ],
      },
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
