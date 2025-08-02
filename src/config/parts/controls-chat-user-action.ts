import { ButtonProps } from '../../components';
import { ButtonTypes, ButtonViewTypes } from '../../constants';

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
