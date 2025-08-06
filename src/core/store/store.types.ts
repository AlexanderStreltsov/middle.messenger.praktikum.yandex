import type { Chats, User, Message } from '../../api';

export interface AppState {
  isLoading: boolean;
  isLoadingMessages: boolean;
  user: User | null;
  chats: Chats | [];
  messages: Message[];
  errorMessages: string | null;
  errorChats: string | null;
  usersSelectedChat: User[];
}

export interface StoreBase {
  getState: () => AppState;
  set: (nextState: Partial<AppState>) => void;
}
