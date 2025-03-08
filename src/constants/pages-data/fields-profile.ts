import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_PROFILE = {
  email: {
    ...FIELDS_DEFAULT.email,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.email.inputProps.attrs,
        disabled: 'true',
        value: 'pochta@yandex.ru',
      },
    },
  },
  login: {
    ...FIELDS_DEFAULT.login,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.login.inputProps.attrs,
        disabled: 'true',
        value: 'ivanivanov',
      },
    },
  },
  name: {
    ...FIELDS_DEFAULT.name,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.name.inputProps.attrs,
        disabled: 'true',
        value: 'Иван',
      },
    },
  },
  surname: {
    ...FIELDS_DEFAULT.surname,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.surname.inputProps.attrs,
        disabled: 'true',
        value: 'Иванов',
      },
    },
  },
  displayName: {
    ...FIELDS_DEFAULT.displayName,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.displayName.inputProps.attrs,
        disabled: 'true',
        value: 'Иван',
      },
    },
  },
  phone: {
    ...FIELDS_DEFAULT.phone,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.phone.inputProps.attrs,
        disabled: 'true',
        value: '+79999999990',
      },
    },
  },
};
