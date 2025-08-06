import {
  AuthApi,
  type SignInData,
  type SignUpData,
  type ErrorApi,
} from '../../api';
import { RoutesNames } from '../../constants';
import { Block } from '../../core';
import { setFieldsErrors, getTextServerError } from '../../utils';

export const authApi = new AuthApi();

export const signUp = async (model: SignUpData, form: Block) => {
  const { store, router } = window;
  store.set({ isLoading: true });
  try {
    await authApi.signUp(model);
    router.go(RoutesNames.chats);
  } catch (error) {
    store.set({ user: null });
    setFieldsErrors(form, getTextServerError((error as ErrorApi).reason));
  } finally {
    store.set({ isLoading: false });
  }
};

export const signIn = async (model: SignInData, form: Block) => {
  const { store, router } = window;
  store.set({ isLoading: true });
  try {
    await authApi.signIn(model);
    router.go(RoutesNames.chats);
  } catch (error) {
    store.set({ user: null });
    setFieldsErrors(form, getTextServerError((error as ErrorApi).reason));
  } finally {
    store.set({ isLoading: false });
  }
};

export const checkAuth = async () => {
  const { store } = window;
  store.set({ isLoading: true, isLoadingMessages: true });

  try {
    const user = await authApi.getUserInfo();
    if (!user) {
      return false;
    }
    store.set({ user });
    return true;
  } catch {
    return false;
  } finally {
    store.set({ isLoading: false, isLoadingMessages: false });
  }
};

export const logout = async () => {
  const { store, router } = window;
  store.set({ isLoading: true });
  try {
    store.set({ user: null });
    await authApi.logout();
  } catch {
    router.go(RoutesNames.signin);
  } finally {
    router.go(RoutesNames.signin);
    store.set({ isLoading: false });
  }
};
