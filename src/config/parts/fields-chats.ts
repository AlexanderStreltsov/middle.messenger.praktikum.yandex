import { InputNames } from '../../constants';
import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_CHATS = {
  addChat: { ...FIELDS_DEFAULT.addChat, attrs: { for: InputNames.ADD_CHAT } },
  addUser: {
    ...FIELDS_DEFAULT.login,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.login.inputProps.attrs,
        list: 'searchUser',
      },
    },
    attrs: { for: InputNames.LOGIN },
  },
  deleteUser: {
    ...FIELDS_DEFAULT.login,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.login.inputProps.attrs,
        list: 'deleteUser',
      },
    },
    attrs: { for: InputNames.LOGIN },
  },
};
