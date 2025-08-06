export const getTimeMessage = (date: string) => {
  const dateMessage = new Date(date);

  const time =
    `${dateMessage.getHours().toString().padStart(2, '0')}:` +
    `${dateMessage.getMinutes().toString().padStart(2, '0')}`;

  return time;
};
