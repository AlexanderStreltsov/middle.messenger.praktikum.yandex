import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_PROFILE_EDIT = {
  email: {
    ...FIELDS_DEFAULT.email,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.email.inputProps.attrs,
        value: 'pochta@yandex.ru',
      },
    },
  },
  login: {
    ...FIELDS_DEFAULT.login,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.login.inputProps.attrs,
        value: 'ivanivanov',
      },
    },
  },
  name: {
    ...FIELDS_DEFAULT.name,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.name.inputProps.attrs,
        value: 'Иван',
      },
    },
  },
  surname: {
    ...FIELDS_DEFAULT.surname,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.surname.inputProps.attrs,
        value: 'Иванов',
      },
    },
  },
  displayName: {
    ...FIELDS_DEFAULT.displayName,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.displayName.inputProps.attrs,
        value: 'Иван',
      },
    },
  },
  phone: {
    ...FIELDS_DEFAULT.phone,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.phone.inputProps.attrs,
        value: '+79999999990',
      },
    },
  },
};
