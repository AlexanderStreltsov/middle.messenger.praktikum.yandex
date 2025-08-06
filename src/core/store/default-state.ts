import type { AppState } from './store.types';

export const DEFAULT_STATE: AppState = {
  isLoading: false,
  isLoadingMessages: false,
  user: null,
  chats: [],
  messages: [],
  errorMessages: null,
  errorChats: null,
  usersSelectedChat: [],
};
