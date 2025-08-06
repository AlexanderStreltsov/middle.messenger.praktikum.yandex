import { FIELDS_DEFAULT } from './fields-default';

const createField = (field: keyof typeof FIELDS_DEFAULT) => ({
  ...FIELDS_DEFAULT[field],
  inputProps: {
    attrs: {
      ...FIELDS_DEFAULT[field].inputProps.attrs,
      disabled: 'true',
    },
  },
});

export const FIELDS_PROFILE = {
  email: createField('email'),
  login: createField('login'),
  name: createField('name'),
  surname: createField('surname'),
  displayName: createField('displayName'),
  phone: createField('phone'),
};
