import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROLS_CHAT_USER_ACTION: Record<string, ButtonProps> = {
  add: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_add',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
