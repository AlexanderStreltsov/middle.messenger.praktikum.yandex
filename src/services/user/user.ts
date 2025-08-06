import {
  UserApi,
  type User,
  type EditProfileData,
  type ErrorApi,
  type EditPasswordData,
  type SearchData,
} from '../../api';
import { InputNames } from '../../constants';
import { Block } from '../../core';
import { setFieldsErrors, getTextServerError } from '../../utils';
import { authApi } from '../auth';

const userApi = new UserApi();

export const editProfile = async (model: EditProfileData, form: Block) => {
  const { store } = window;
  const { user } = store.getState();
  const changedFields: EditProfileData = {};

  if (!user) {
    return;
  }

  Object.keys(model).forEach((key) => {
    if (model[key] !== (user as User)[key]) {
      changedFields[key] = model[key];
    }
  });

  if (Object.keys(changedFields).length === 0) {
    return;
  }

  store.set({ isLoading: true });
  try {
    const user = await userApi.editProfile(changedFields);
    store.set({ user });
  } catch (error) {
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason),
      Object.keys(changedFields) as InputNames[],
    );
  } finally {
    store.set({ isLoading: false });
  }
};

export const editPassword = async (
  { oldPassword, newPassword }: EditPasswordData,
  form: Block,
) => {
  const { store } = window;
  store.set({ isLoading: true });
  try {
    await userApi.editPassword({
      oldPassword,
      newPassword,
    });
    const user = await authApi.getUserInfo();
    store.set({ user });
  } catch (error) {
    setFieldsErrors(form, getTextServerError((error as ErrorApi).reason));
  } finally {
    store.set({ isLoading: false });
  }
};

export const editAvatar = async (
  data: FormData,
  form: Block,
  closeModal: () => void,
) => {
  const { store } = window;
  store.set({ isLoading: true });
  try {
    const user = await userApi.editAvatar(data);
    store.set({ user });
    closeModal();
  } catch (error) {
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason) || (error as string),
    );
  } finally {
    store.set({ isLoading: false });
  }
};

export const searchUser = async (data: SearchData, form: Block) => {
  try {
    return await userApi.search(data);
  } catch (error) {
    setFieldsErrors(
      form,
      getTextServerError((error as ErrorApi).reason) || (error as string),
    );
  }
};
