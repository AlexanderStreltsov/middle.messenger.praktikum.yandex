import { InputNames } from '../constants';
import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_CHAT_ADD_USER = {
  login: { ...FIELDS_DEFAULT.login, attrs: { for: InputNames.LOGIN } },
};
