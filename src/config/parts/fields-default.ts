import type { InputFieldProps } from '../../components';
import { InputNames, InputTypes } from '../../constants';

export const FIELDS_DEFAULT: Record<string, InputFieldProps> = {
  login: {
    label: 'Логин',
    inputProps: {
      attrs: {
        name: InputNames.LOGIN,
        type: InputTypes.TEXT,
      },
    },
  },
  pass: {
    label: 'Пароль',
    inputProps: {
      attrs: {
        name: InputNames.PASS,
        type: InputTypes.PASS,
      },
    },
  },
  email: {
    label: 'Почта',
    inputProps: {
      attrs: {
        name: InputNames.EMAIL,
        type: InputTypes.EMAIL,
      },
    },
  },
  name: {
    label: 'Имя',
    inputProps: {
      attrs: {
        name: InputNames.FIRST_NAME,
        type: InputTypes.TEXT,
      },
    },
  },
  surname: {
    label: 'Фамилия',
    inputProps: {
      attrs: {
        name: InputNames.SECOND_NAME,
        type: InputTypes.TEXT,
      },
    },
  },
  phone: {
    label: 'Телефон',
    inputProps: {
      attrs: {
        name: InputNames.PHONE,
        type: InputTypes.TEL,
      },
    },
  },
  passConfirm: {
    label: 'Пароль (ещё раз)',
    inputProps: {
      attrs: {
        name: InputNames.PASS_CONFIRM,
        type: InputTypes.PASS,
      },
    },
  },
  displayName: {
    label: 'Имя в чате',
    inputProps: {
      attrs: {
        name: InputNames.DISPLAY_NAME,
        type: InputTypes.TEXT,
      },
    },
  },
  oldPass: {
    label: 'Старый пароль',
    inputProps: {
      attrs: {
        name: InputNames.OLD_PASSWORD,
        type: InputTypes.PASS,
      },
    },
  },
  newPass: {
    label: 'Новый пароль',
    inputProps: {
      attrs: {
        name: InputNames.NEW_PASSWORD,
        type: InputTypes.PASS,
      },
    },
  },
  newPassConfirm: {
    label: 'Повторите новый пароль',
    inputProps: {
      attrs: {
        name: InputNames.PASS_CONFIRM,
        type: InputTypes.PASS,
      },
    },
  },
  search: {
    label: 'Поиск',
    inputProps: {
      attrs: {
        placeholder: 'Поиск',
        name: InputNames.SEARCH,
        type: InputTypes.SEARCH,
      },
    },
  },
  message: {
    label: 'Сообщение',
    inputProps: {
      attrs: {
        placeholder: 'Сообщение',
        name: InputNames.MESSAGE,
        type: InputTypes.TEXT,
      },
    },
  },
  avatar: {
    label: '',
    inputProps: {
      attrs: {
        placeholder: '',
        name: InputNames.AVATAR,
        type: InputTypes.FILE,
      },
    },
  },
};
