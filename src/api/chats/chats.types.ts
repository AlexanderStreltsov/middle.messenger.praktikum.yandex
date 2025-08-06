import type { Message } from '../messages';

export interface ChatsItem {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  created_by: string;
  last_message: Message | null;
}

export type Chats = ChatsItem[];

export interface AddChatData {
  title: string;
  [key: string]: unknown;
}

export interface AddChatResponse {
  id: number;
}

export interface AddUserData {
  users: number[];
  chatId: number;
  [key: string]: unknown;
}

export interface Token {
  token: string;
}

export interface ChatsApiBase {
  getChats: () => Promise<Chats>;
  addChat: (data: AddChatData) => Promise<AddChatResponse>;
  getMessages: (chatId: number) => Promise<Chats>;
  addUser: (data: AddUserData) => Promise<XMLHttpRequest>;
  getToken: (chatId: number) => Promise<Token>;
  deleteChatUser: (data: AddUserData) => Promise<XMLHttpRequest>;
}
