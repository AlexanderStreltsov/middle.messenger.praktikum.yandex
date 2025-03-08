import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROLS_CHAT_SEND_MSG: Record<string, ButtonProps> = {
  send: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_arrow-right',
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
