import { ButtonProps } from '../../components';
import {
  NamesGoEvent,
  ButtonTypes,
  ButtonActionNames,
  ButtonViewTypes,
} from '../../constants';

export const CONTROLS_PROFILE: Record<string, ButtonProps> = {
  editData: {
    label: 'Изменить данные',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    nameGoEvent: NamesGoEvent.goProfileEdit,
  },
  editPass: {
    label: 'Изменить пароль',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    nameGoEvent: NamesGoEvent.goProfilePass,
  },
  out: {
    label: 'Выйти',
    typeView: ButtonViewTypes.LINK,
    className: 'button__link_red',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
    actionName: ButtonActionNames.LOGOUT,
  },
};
