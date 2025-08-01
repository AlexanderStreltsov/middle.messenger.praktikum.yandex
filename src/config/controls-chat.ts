import { ButtonProps } from '../components';
import { ButtonTypes, ButtonViewTypes } from '../constants';

export const CONTROL_CHAT_TO_PROFILE: Record<string, ButtonProps> = {
  profile: {
    label: 'Профиль >',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
