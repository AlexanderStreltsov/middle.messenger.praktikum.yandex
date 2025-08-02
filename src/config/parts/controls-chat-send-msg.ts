import { ButtonProps } from '../../components';
import { ButtonTypes, ButtonViewTypes } from '../../constants';

export const CONTROLS_CHAT_SEND_MSG: Record<string, ButtonProps> = {
  send: {
    label: '',
    typeView: ButtonViewTypes.LINK,
    className: 'button__icon button__icon_arrow-right',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
};
