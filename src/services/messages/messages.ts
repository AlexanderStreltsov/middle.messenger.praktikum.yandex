import { type ErrorApi, type Message, MessagesApi } from '../../api';
import { getTextServerError } from '../../utils';
import { chatsApi } from '../chats';
import type { MessagesServicesBase } from './messages.types';

export class MessagesServices implements MessagesServicesBase {
  private messagesApi: MessagesApi | null = null;

  constructor() {}

  async createChatsConnection(chatId: number) {
    const { store } = window;
    const { user } = store.getState();

    if (!user) {
      return;
    }

    try {
      this.closeChatsConnection();
      const { token } = await chatsApi.getToken(chatId);
      const messagesChat = await chatsApi.getMessages(chatId);
      const usersChat = await chatsApi.getChatUsers(chatId);
      const messages = messagesChat
        .filter((chat) => !!chat.last_message)
        .map((chat) => chat.last_message as Message);

      store.set({
        messages,
        errorMessages: null,
        usersSelectedChat: usersChat,
      });

      const messagesApi = new MessagesApi(user.id, chatId, token);

      messagesApi.createConnection((data) => {
        const { messages: currentMessages, chats } = store.getState();

        if (Array.isArray(data)) {
          const messagesNew = data.reverse() as Message[];
          const [lastMessage] = messagesNew;

          const chatsNew = chats.map((chat) =>
            chat.id === chatId ? { ...chat, last_message: lastMessage } : chat,
          );

          store.set({ messages: messagesNew, chats: chatsNew });
          return;
        }

        const chatsNew = chats.map((chat) =>
          chat.id === chatId ? { ...chat, last_message: data } : chat,
        );

        store.set({
          messages: [...currentMessages, data] as Message[],
          chats: chatsNew,
        });
      });

      this.messagesApi = messagesApi;
    } catch (error) {
      store.set({
        errorMessages: getTextServerError(
          (error as ErrorApi).reason || (error as string),
        ),
      });
    }
  }

  sendMessage = (message: string) => {
    if (this.messagesApi) {
      this.messagesApi.sendMessage(message);
    }
  };

  closeChatsConnection = () => {
    if (this.messagesApi) {
      this.messagesApi.closeConnection();
      this.messagesApi = null;
    }
  };
}
