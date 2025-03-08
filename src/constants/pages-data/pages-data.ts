import {
  ErrorPage,
  NavigatePage,
  AuthPage,
  ProfilePage,
  ChatPage,
  type AuthPageProps,
  type ProfilePageProps,
  type ErrorPageProps,
  type NavigatePageProps,
  type ChatPageProps,
} from '../../pages';
import { PagesNames } from '../pages-names';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';
import { ProfilePageActionsGroupType } from '../profile-page-actions';
import { FIELDS_AUTH } from './fields-auth';
import { FIELDS_DEFAULT } from './fields-default';
import { FIELDS_PROFILE } from './fields-profile';
import { FIELDS_PROFILE_EDIT } from './fields-profile-edit';
import { FIELDS_CHAT_ADD_USER } from './fields-chat-add-user';
import { CONTROLS_PROFILE } from './controls-profile';
import { CONTROLS_SIGNIN } from './controls-signin';
import { CONTROLS_SIGNUP } from './controls-signup';
import { CONTROL_CHAT_TO_PROFILE } from './controls-chat';
import { CONTROLS_CHAT_SEND_MSG } from './controls-chat-send-msg';
import { CONTROLS_CHAT_USER_ACTION } from './controls-chat-user-action';
import { CONTROLS_CHAT_ADD_USER } from './controls-chat-add-user';
import { PROFILE_PAGE_NAV, PROFILE_PAGE_COMMON } from './profile-page-common';
import { CONTROLS_PROFILE_CHANGE_AVATAR } from './controls-profile-change-avatar';
import { CHAT_MESSAGES } from './chat-messages';

export type PagesDataUnionProps = ErrorPageProps &
  AuthPageProps &
  ProfilePageProps &
  NavigatePageProps &
  ChatPageProps;

type PagesData = {
  [key in PagesNames]: {
    template:
      | typeof ErrorPage
      | typeof AuthPage
      | typeof ProfilePage
      | typeof NavigatePage
      | typeof ChatPage;
    props:
      | ErrorPageProps
      | AuthPageProps
      | ProfilePageProps
      | NavigatePageProps
      | ChatPageProps;
  };
};

export const PAGES_DATA: PagesData = {
  [PagesNames.navigate]: {
    template: NavigatePage,
    props: {
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
    props: {
      title: 'Вход',
      fields: [FIELDS_AUTH.login, FIELDS_AUTH.pass],
      controls: [CONTROLS_SIGNIN.login, CONTROLS_SIGNIN.registration],
    },
  },
  [PagesNames.signup]: {
    template: AuthPage,
    props: {
      title: 'Регистрация',
      fields: [
        FIELDS_AUTH.email,
        FIELDS_AUTH.login,
        FIELDS_AUTH.name,
        FIELDS_AUTH.surname,
        FIELDS_AUTH.phone,
        FIELDS_AUTH.pass,
        FIELDS_AUTH.passConfirm,
      ],
      controls: [CONTROLS_SIGNUP.registration, CONTROLS_SIGNUP.login],
    },
  },
  [PagesNames.chat]: {
    template: ChatPage,
    props: {
      controlProfile: CONTROL_CHAT_TO_PROFILE.profile,
      fieldSearch: FIELDS_DEFAULT.search,
      messages: CHAT_MESSAGES,
      fieldsSendMsg: [FIELDS_DEFAULT.message],
      controlsSendMsg: [CONTROLS_CHAT_SEND_MSG.send],
      controlsUserAction: [CONTROLS_CHAT_USER_ACTION.add],
      fieldsAddUser: [FIELDS_CHAT_ADD_USER.login],
      controlsAddUser: [CONTROLS_CHAT_ADD_USER.add],
      titleAddUser: 'Добавить пользователя',
      textNoSelectChat: 'Выберите чат чтобы отправить сообщение',
    },
  },
  [PagesNames.profile]: {
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
      title: 'Иван',
      fields: [
        FIELDS_PROFILE.email,
        FIELDS_PROFILE.login,
        FIELDS_PROFILE.name,
        FIELDS_PROFILE.surname,
        FIELDS_PROFILE.displayName,
        FIELDS_PROFILE.phone,
      ],
      controls: [
        CONTROLS_PROFILE.editData,
        CONTROLS_PROFILE.editPass,
        CONTROLS_PROFILE.out,
      ],
      controlsViewType: ProfilePageActionsGroupType.LIST,
      avatar: {
        ...PROFILE_PAGE_COMMON.avatar,
        isChange: true,
        textCover: 'Поменять аватар',
      },
      fieldsChangeAvatar: [FIELDS_DEFAULT.avatar],
      controlsChangeAvatar: [CONTROLS_PROFILE_CHANGE_AVATAR.change],
      titleChangeAvatar: 'Загрузите файл',
    },
  },
  [PagesNames['profile-edit']]: {
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
      fields: [
        FIELDS_PROFILE_EDIT.email,
        FIELDS_PROFILE_EDIT.login,
        FIELDS_PROFILE_EDIT.name,
        FIELDS_PROFILE_EDIT.surname,
        FIELDS_PROFILE_EDIT.displayName,
        FIELDS_PROFILE_EDIT.phone,
      ],
    },
  },
  [PagesNames['profile-pass-edit']]: {
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
      fields: [
        {
          ...FIELDS_DEFAULT.oldPass,
          inputProps: {
            attrs: {
              ...FIELDS_DEFAULT.oldPass.inputProps.attrs,
              value: '12345Qwerty',
            },
          },
        },
        FIELDS_DEFAULT.newPass,
        FIELDS_DEFAULT.newPassConfirm,
      ],
    },
  },
  [PagesNames.error404]: {
    template: ErrorPage,
    props: {
      title: '404',
      subTitle: 'Не туда попали',
      control: {
        label: 'Назад к чатам',
        typeView: ButtonViewTypes.LINK,
        attrs: {
          type: ButtonTypes.BUTTON,
        },
      },
    },
  },
  [PagesNames.error500]: {
    template: ErrorPage,
    props: {
      title: '500',
      subTitle: 'Мы уже фиксим',
      control: {
        label: 'Назад к чатам',
        typeView: ButtonViewTypes.LINK,
        attrs: {
          type: ButtonTypes.BUTTON,
        },
      },
    },
  },
};
