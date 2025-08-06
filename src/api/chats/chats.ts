import { HTTPTransport } from '../../core';
import { ChatsApiPaths } from '../../constants';
import type { User } from '../user';
import type {
  Chats,
  ChatsApiBase,
  AddChatData,
  AddChatResponse,
  AddUserData,
  Token,
} from './chats.types';

const chatsApi = new HTTPTransport(ChatsApiPaths.Chats);

export class ChatsApi implements ChatsApiBase {
  async getChats() {
    return chatsApi.get<Chats>('');
  }

  async addChat(data: AddChatData) {
    return chatsApi.post<AddChatResponse>('', { data });
  }

  async getMessages(chatId: number) {
    return chatsApi.get<Chats>(`/${chatId}${ChatsApiPaths.Common}`);
  }

  async addUser(data: AddUserData) {
    return chatsApi.put(ChatsApiPaths.Users, { data });
  }

  async getToken(chatId: number) {
    return chatsApi.post<Token>(`${ChatsApiPaths.Token}/${chatId}`);
  }

  async getChatUsers(chatId: number) {
    return chatsApi.get<User[]>(`/${chatId}${ChatsApiPaths.Users}`);
  }

  async deleteChatUser(data: AddUserData) {
    return chatsApi.delete(ChatsApiPaths.Users, { data });
  }
}
