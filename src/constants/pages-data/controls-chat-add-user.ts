import { ButtonProps } from '../../components';
import { ButtonTypes } from '../button-types';

export const CONTROLS_CHAT_ADD_USER: Record<string, ButtonProps> = {
  add: {
    label: 'Добавить',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
};
