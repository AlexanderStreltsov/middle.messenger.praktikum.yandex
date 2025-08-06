export const getTextServerError = (reason: string) => {
  switch (reason) {
    case 'Its not a personal messages chat':
      return 'Чтобы начать общение, нужно добавить собеседника в чат';
    case 'Login or password is incorrect':
      return 'Введите корректные логин и пароль';
    case 'Email already exists':
      return 'Пользователь с таким email уже существует';
    case 'Login already exists':
      return 'Пользователь с таким логином уже существует';
    default:
      return reason;
  }
};
