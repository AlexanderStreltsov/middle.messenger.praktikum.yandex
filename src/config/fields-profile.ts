import { FIELDS_DEFAULT } from './fields-default';

export const FIELDS_PROFILE = {
  email: {
    ...FIELDS_DEFAULT.email,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.email.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
  login: {
    ...FIELDS_DEFAULT.login,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.login.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
  name: {
    ...FIELDS_DEFAULT.name,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.name.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
  surname: {
    ...FIELDS_DEFAULT.surname,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.surname.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
  displayName: {
    ...FIELDS_DEFAULT.displayName,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.displayName.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
  phone: {
    ...FIELDS_DEFAULT.phone,
    inputProps: {
      attrs: {
        ...FIELDS_DEFAULT.phone.inputProps.attrs,
        disabled: 'true',
      },
    },
  },
};
