import { API_WS_URL } from '../../constants';
import {
  WebSocketTypes,
  type Message,
  type MessagesApiBase,
} from './messages.types';

export class MessagesApi implements MessagesApiBase {
  private socket: WebSocket;

  constructor(userId: number, chatId: number, token: string) {
    this.socket = new WebSocket(`${API_WS_URL}/${userId}/${chatId}/${token}`);
  }

  public createConnection = (
    handleMessage: (data: Message | Message[]) => void,
  ) => {
    this.socket.onopen = () => {
      // eslint-disable-next-line no-console
      console.log('Соединение установлено');
      this.socket.send(
        JSON.stringify({
          content: '0',
          type: WebSocketTypes.GET_OLD,
        }),
      );
    };

    this.socket.onmessage = (event: MessageEvent<Message | Message[]>) => {
      // eslint-disable-next-line no-console
      console.log('Получено сообщение', event.data);
      handleMessage(JSON.parse(event.data as unknown as string));
    };

    // eslint-disable-next-line no-console
    this.socket.onerror = (error) => console.error('Произошла ошибка:', error);

    this.socket.onclose = (event) => {
      // eslint-disable-next-line no-console
      console.log('Соединение закрыто', event.code, event.reason);
    };
  };

  public sendMessage = (content: string) => {
    // eslint-disable-next-line no-console
    console.log('Отправлено сообщение');
    this.socket.send(
      JSON.stringify({
        content,
        type: WebSocketTypes.MESSAGE,
      }),
    );
  };

  public closeConnection = () => this.socket.close();
}
