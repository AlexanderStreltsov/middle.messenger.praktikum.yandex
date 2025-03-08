import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';

export const CONTROL_CHAT_TO_PROFILE: Record<string, ButtonProps> = {
  profile: {
    label: 'Профиль >',
    typeView: ButtonViewTypes.LINK,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};
