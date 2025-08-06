import { ErrorPage, AuthPage, ProfilePage, ChatsPage } from '../pages';
import {
  PagesNames,
  ButtonTypes,
  ButtonViewTypes,
  ProfilePageActionsGroupType,
  RoutesNames,
  ButtonActionNames,
} from '../constants';
import {
  FIELDS_AUTH,
  FIELDS_CHATS,
  FIELDS_DEFAULT,
  FIELDS_PROFILE,
  CONTROLS_PROFILE,
  CONTROLS_SIGNIN,
  CONTROLS_SIGNUP,
  CONTROLS_CHATS,
  PROFILE_PAGE_NAV,
  PROFILE_PAGE_COMMON,
} from './parts';
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
  [PagesNames.chats]: {
    route: RoutesNames.chats,
    template: ChatsPage,
    props: {
      controlsChats: [CONTROLS_CHATS.addChatOpen, CONTROLS_CHATS.goProfile],
      fieldSearch: FIELDS_DEFAULT.search,
      chats: [],
      modals: [
        {
          title: 'Добавить чат',
          fields: [FIELDS_CHATS.addChat],
          controls: [CONTROLS_CHATS.addChat],
          actionName: ButtonActionNames.ADD_CHAT,
        },
        {
          title: 'Добавить пользователя',
          fields: [FIELDS_CHATS.addUser],
          controls: [CONTROLS_CHATS.addUser],
          actionName: ButtonActionNames.ADD_USER,
        },
      ],
      fieldsSendMsg: [FIELDS_DEFAULT.message],
      controlsSendMsg: [CONTROLS_CHATS.sendMessage],
      controlsUserActions: [CONTROLS_CHATS.addUserOpen],
      textNoSelectChat: 'Выберите чат, чтобы отправить сообщение',
    },
  },
  [PagesNames.profile]: {
    route: RoutesNames.profile,
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
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
      controlsChangeAvatar: [CONTROLS_PROFILE.change],
      titleChangeAvatar: 'Загрузите файл',
      name: PagesNames.profile,
    },
  },
  [PagesNames.profileEdit]: {
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
      name: PagesNames.profileEdit,
    },
  },
  [PagesNames.profilePassEdit]: {
    route: RoutesNames.profilePass,
    template: ProfilePage,
    props: {
      ...PROFILE_PAGE_NAV,
      ...PROFILE_PAGE_COMMON,
      fields: [
        FIELDS_DEFAULT.oldPass,
        FIELDS_DEFAULT.newPass,
        FIELDS_DEFAULT.newPassConfirm,
      ],
      name: PagesNames.profilePassEdit,
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
