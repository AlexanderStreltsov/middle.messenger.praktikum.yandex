import { ButtonProps } from '../../components';
import { ButtonTypes } from '../../constants';

export const CONTROLS_CHAT_ADD_USER: Record<string, ButtonProps> = {
  add: {
    label: 'Добавить',
    attrs: {
      type: ButtonTypes.SUBMIT,
    },
  },
};
