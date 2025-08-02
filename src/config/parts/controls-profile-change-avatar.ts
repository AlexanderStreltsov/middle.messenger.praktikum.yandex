import { ButtonProps } from '../../components';
import { ButtonTypes } from '../../constants';

export const CONTROLS_PROFILE_CHANGE_AVATAR: Record<string, ButtonProps> = {
  change: {
    label: 'Поменять',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
};
