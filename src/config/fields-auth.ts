import { InputNames } from '../constants';
import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_AUTH = {
  login: { ...FIELDS_DEFAULT.login, attrs: { for: InputNames.LOGIN } },
  pass: { ...FIELDS_DEFAULT.pass, attrs: { for: InputNames.PASS } },
  email: { ...FIELDS_DEFAULT.email, attrs: { for: InputNames.EMAIL } },
  name: { ...FIELDS_DEFAULT.name, attrs: { for: InputNames.FIRST_NAME } },
  surname: {
    ...FIELDS_DEFAULT.surname,
    attrs: { for: InputNames.SECOND_NAME },
  },
  phone: { ...FIELDS_DEFAULT.phone, attrs: { for: InputNames.PHONE } },
  passConfirm: {
    ...FIELDS_DEFAULT.passConfirm,
    attrs: { for: InputNames.PASS_CONFIRM },
  },
};
