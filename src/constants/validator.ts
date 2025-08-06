import { InputNames } from './input-names';

type Validator = {
  [key in InputNames]?: {
    reg: RegExp;
    error: string;
    min?: number;
    max?: number;
  };
};

export const VALIDATOR: Validator = {
  [InputNames.LOGIN]: {
    min: 3,
    max: 20,
    reg: new RegExp(/^(?!\d+$)[A-Za-z0-9_-]+$/),
    error:
      'Логин должен быть от 3 до 20 символов. Может содержать латинские буквы, цифры, дефисы и подчеркивания',
  },
  [InputNames.PASS]: {
    min: 8,
    max: 40,
    reg: new RegExp(/^(?=.*[A-Z])(?=.*\d).+$/),
    error:
      'Пароль должен быть от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра',
  },
  [InputNames.OLD_PASSWORD]: {
    min: 8,
    max: 40,
    reg: new RegExp(/^(?=.*[A-Z])(?=.*\d).+$/),
    error:
      'Пароль должен быть от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра',
  },
  [InputNames.NEW_PASSWORD]: {
    min: 8,
    max: 40,
    reg: new RegExp(/^(?=.*[A-Z])(?=.*\d).+$/),
    error:
      'Пароль должен быть от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра',
  },
  [InputNames.PASS_CONFIRM]: {
    min: 8,
    max: 40,
    reg: new RegExp(/^(?=.*[A-Z])(?=.*\d).+$/),
    error:
      'Пароль должен быть от 8 до 40 символов. Обязательно хотя бы одна заглавная буква и цифра',
  },
  [InputNames.FIRST_NAME]: {
    reg: new RegExp(/^[A-ZА-ЯЁ][a-zа-яё-]*$/),
    error:
      'Имя должно состоять из букв или дефиса и начинаться с заглавной буквы',
  },
  [InputNames.SECOND_NAME]: {
    reg: new RegExp(/^[A-ZА-ЯЁ][a-zа-яё-]*$/),
    error:
      'Фамилия должна состоять из букв или дефиса и начинаться с заглавной буквы',
  },
  [InputNames.PHONE]: {
    min: 10,
    max: 15,
    reg: new RegExp(/^\+?\d+$/),
    error: 'Телефон должен быть от 10 до 15 цифр (может начинаться с +)',
  },
  [InputNames.EMAIL]: {
    reg: new RegExp(/^((?!\.)[\w\-.]*[^.])@([\w\-]+\.)+[\w\-]{2,4}$/),
    error: 'Введите корректный адрес почты',
  },
  [InputNames.DISPLAY_NAME]: {
    min: 1,
    reg: new RegExp(/^.*$/),
    error: 'Введите отображаемое имя',
  },
  [InputNames.MESSAGE]: {
    min: 1,
    reg: new RegExp(/^.*$/),
    error: 'Введите сообщение',
  },
  [InputNames.AVATAR]: {
    min: 1,
    reg: new RegExp(/^.*$/),
    error: 'Файл не выбран',
  },
  [InputNames.ADD_CHAT]: {
    min: 1,
    reg: new RegExp(/^.*$/),
    error: 'Введите название чата',
  },
};

export const ERROR_CONFIRM_PASSWORD = 'Пароли не совпадают';
export const ERROR_NEW_PASSWORD = 'Новый пароль совпадает со старым';
