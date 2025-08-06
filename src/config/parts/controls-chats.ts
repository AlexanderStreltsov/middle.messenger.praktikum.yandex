import { ButtonProps } from '../../components';
import {
  ButtonActionNames,
  ButtonTypes,
  ButtonViewTypes,
  NamesGoEvent,
} from '../../constants';

export const CONTROLS_CHATS: Record<string, ButtonProps> = {
  goProfile: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_profile',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    nameGoEvent: NamesGoEvent.goProfile,
  },
  addChatOpen: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_add',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    actionName: ButtonActionNames.ADD_CHAT_OPEN,
  },
  addChat: {
    label: 'Добавить',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
    actionName: ButtonActionNames.ADD_CHAT,
  },
  addUserOpen: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_add',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    actionName: ButtonActionNames.ADD_USER_OPEN,
  },
  addUser: {
    label: 'Добавить',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
    actionName: ButtonActionNames.ADD_USER,
  },
  sendMessage: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_arrow-right',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
  deleteUser: {
    label: 'Удалить',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
    actionName: ButtonActionNames.DELETE_USER,
  },
  deleteUserOpen: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_delete',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    actionName: ButtonActionNames.DELETE_USER_OPEN,
  },
};
