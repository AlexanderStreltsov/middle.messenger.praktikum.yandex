import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROLS_PROFILE: Record<string, ButtonProps> = {
  editData: {
    label: 'Изменить данные',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
  editPass: {
    label: 'Изменить пароль',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
  out: {
    label: 'Выйти',
    typeView: ButtonViewTypes.LINK,
    className: 'button__link_red',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
