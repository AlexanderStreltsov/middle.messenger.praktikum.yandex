import {
  ChatsApi,
  type AddChatData,
  type ErrorApi,
  type AddUserData,
} from '../../api';
import type { Block } from '../../core';
import { setFieldsErrors, getTextServerError } from '../../utils';
import { MessagesServices } from '../messages';

export const chatsApi = new ChatsApi();

export const getChats = async () => {
  const { store } = window;
  store.set({ isLoading: true });
  try {
    const chats = await chatsApi.getChats();
    store.set({ chats });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    store.set({ chats: [] });
  } finally {
    store.set({ isLoading: false });
  }
};

export const addChat = async (
  data: AddChatData,
  form: Block,
  closeModal: () => void,
) => {
  const { store } = window;
  store.set({ isLoading: true, isLoadingMessages: true });
  try {
    await chatsApi.addChat(data);
    const chats = await chatsApi.getChats();
    store.set({ chats });
    closeModal();
  } catch (error) {
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason) || (error as string),
    );
  } finally {
    store.set({ isLoading: false, isLoadingMessages: false });
  }
};

export const getMessages = async (
  chatId: number,
  MessagesServices: MessagesServices,
) => {
  const { store } = window;
  store.set({ isLoadingMessages: true, errorMessages: null });
  try {
    await MessagesServices.createChatsConnection(chatId);
  } catch (error) {
    await MessagesServices.closeChatsConnection();
    store.set({
      errorMessages: getTextServerError((error as ErrorApi).reason),
    });
    store.set({ messages: [] });
  } finally {
    store.set({ isLoadingMessages: false });
  }
};

export const addUser = async (
  data: AddUserData,
  form: Block,
  chatId: number,
  MessagesServices: MessagesServices,
  closeModal: () => void,
) => {
  const { store } = window;
  store.set({ isLoading: true, isLoadingMessages: true });
  try {
    await chatsApi.addUser(data);
    await MessagesServices.createChatsConnection(chatId);
    closeModal();
  } catch (error) {
    MessagesServices.closeChatsConnection();
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason) || (error as string),
    );
  } finally {
    store.set({ isLoading: false, isLoadingMessages: false });
  }
};

export const deleteUser = async (
  data: AddUserData,
  form: Block,
  chatId: number,
  MessagesServices: MessagesServices,
  closeModal: () => void,
) => {
  const { store } = window;
  store.set({ isLoading: true, isLoadingMessages: true });
  try {
    await chatsApi.deleteChatUser(data);
    const usersChat = await chatsApi.getChatUsers(chatId);
    store.set({ usersSelectedChat: usersChat });
    await MessagesServices.createChatsConnection(chatId);
    closeModal();
  } catch (error) {
    MessagesServices.closeChatsConnection();
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason) || (error as string),
    );
  } finally {
    store.set({ isLoading: false, isLoadingMessages: false });
  }
};
