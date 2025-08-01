import { ErrorPage, AuthPage, ProfilePage, ChatPage } from '../pages';
import {
  PagesNames,
  ButtonTypes,
  ButtonViewTypes,
  ProfilePageActionsGroupType,
  RoutesNames,
} from '../constants';
import { FIELDS_AUTH } from './fields-auth';
import { FIELDS_DEFAULT } from './fields-default';
import { FIELDS_PROFILE } from './fields-profile';
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
import type { PagesConfig } from './pages-config.types';

export const PAGES_CONFIG: PagesConfig = {
  [PagesNames.signin]: {
    route: RoutesNames.signin,
    template: AuthPage,
    props: {
      title: 'Вход',
      fields: [FIELDS_AUTH.login, FIELDS_AUTH.pass],
      controls: [CONTROLS_SIGNIN.login, CONTROLS_SIGNIN.registration],
      name: PagesNames.signin,
    },
  },
  [PagesNames.signup]: {
    route: RoutesNames.signup,
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
      name: PagesNames.signup,
    },
  },
  [PagesNames.chat]: {
    route: RoutesNames.chat,
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
    route: RoutesNames.profile,
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
    route: RoutesNames.profileEdit,
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
      fields: [
        FIELDS_DEFAULT.email,
        FIELDS_DEFAULT.login,
        FIELDS_DEFAULT.name,
        FIELDS_DEFAULT.surname,
        FIELDS_DEFAULT.displayName,
        FIELDS_DEFAULT.phone,
      ],
    },
  },
  [PagesNames['profile-pass-edit']]: {
    route: RoutesNames.profilePass,
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
    route: RoutesNames.error404,
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
    route: RoutesNames.error500,
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
