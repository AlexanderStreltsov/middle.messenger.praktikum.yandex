import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';

export const CONTROLS_PROFILE_CHANGE_AVATAR: Record<string, ButtonProps> = {
  change: {
    label: 'Поменять',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
};
