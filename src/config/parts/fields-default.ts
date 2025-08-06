import type { InputFieldProps } from '../../components';
import { InputNames, InputTypes } from '../../constants';

const createField = (
  label: string,
  name: InputNames,
  type: InputTypes,
  placeholder = '',
): InputFieldProps => ({
  label,
  inputProps: {
    attrs: {
      name,
      type,
      ...(placeholder && { placeholder }),
    },
  },
});

export const FIELDS_DEFAULT: Record<string, InputFieldProps> = {
  login: createField('Логин', InputNames.LOGIN, InputTypes.TEXT),
  pass: createField('Пароль', InputNames.PASS, InputTypes.PASS),
  email: createField('Почта', InputNames.EMAIL, InputTypes.EMAIL),
  name: createField('Имя', InputNames.FIRST_NAME, InputTypes.TEXT),
  surname: createField('Фамилия', InputNames.SECOND_NAME, InputTypes.TEXT),
  phone: createField('Телефон', InputNames.PHONE, InputTypes.TEL),
  passConfirm: createField(
    'Пароль (ещё раз)',
    InputNames.PASS_CONFIRM,
    InputTypes.PASS,
  ),
  displayName: createField(
    'Имя в чате',
    InputNames.DISPLAY_NAME,
    InputTypes.TEXT,
  ),
  oldPass: createField(
    'Старый пароль',
    InputNames.OLD_PASSWORD,
    InputTypes.PASS,
  ),
  newPass: createField(
    'Новый пароль',
    InputNames.NEW_PASSWORD,
    InputTypes.PASS,
  ),
  newPassConfirm: createField(
    'Повторите новый пароль',
    InputNames.PASS_CONFIRM,
    InputTypes.PASS,
  ),
  search: createField('Поиск', InputNames.SEARCH, InputTypes.SEARCH, 'Поиск'),
  message: createField(
    'Сообщение',
    InputNames.MESSAGE,
    InputTypes.TEXT,
    'Сообщение',
  ),
  avatar: createField('', InputNames.AVATAR, InputTypes.FILE, ''),
  addChat: createField('Название чата', InputNames.ADD_CHAT, InputTypes.TEXT),
};
