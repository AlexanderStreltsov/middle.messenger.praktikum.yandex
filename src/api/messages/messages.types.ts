import type { User } from '../user';

export enum WebSocketTypes {
  GET_OLD = 'get old',
  MESSAGE = 'message',
}

type UserChats = Omit<User, 'id' | 'display_name'>;

export type Message = {
  id?: string;
  chat_id?: number;
  user_id?: number;
  user: UserChats;
  time: string;
  content: string;
  type?: string;
};

export interface MessagesApiBase {
  createConnection: (
    handleMessage: (data: Message | Message[]) => void,
  ) => void;
  sendMessage: (content: string) => void;
  closeConnection: () => void;
}
