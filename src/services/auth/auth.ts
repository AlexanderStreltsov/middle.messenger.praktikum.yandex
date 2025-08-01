import { AuthApi } from '../../api';
import type { SignInData, SignUpData, ErrorApi } from '../../api';
import { RoutesNames } from '../../constants';
import { Block } from '../../core';
import { setFormErrorWithoutValidate } from '../../utils';

const authApi = new AuthApi();

export const signUp = async (model: SignUpData, form: Block) => {
  const { store, router } = window;
  store.set({ isLoading: true });

  try {
    await authApi.signUp(model);
    const user = await authApi.getUserInfo();
    store.set({ user });
    router.go(RoutesNames.profile);
  } catch (error) {
    store.set({ user: null });
    setFormErrorWithoutValidate(form, (error as ErrorApi).reason);
  } finally {
    store.set({ isLoading: false });
  }
};

export const signIn = async (model: SignInData, form: Block) => {
  const { store, router } = window;
  store.set({ isLoading: true });

  try {
    await authApi.signIn(model);
    const user = await authApi.getUserInfo();
    store.set({ user });
    router.go(RoutesNames.profile);
  } catch (error) {
    store.set({ user: null });
    setFormErrorWithoutValidate(form, (error as ErrorApi).reason);
  } finally {
    store.set({ isLoading: false });
  }
};

export const checkAuth = async () => {
  const { store } = window;
  store.set({ isLoading: true });

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
    store.set({ isLoading: false });
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
