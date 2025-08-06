import { HTTPTransport } from '../../core';
import { UserApiPaths } from '../../constants';
import type {
  UserApiBase,
  EditProfileData,
  EditPasswordData,
  SearchData,
  User,
} from './user.types';

const userApi = new HTTPTransport(UserApiPaths.User);

export class UserApi implements UserApiBase {
  async editProfile(data: EditProfileData) {
    return userApi.put<User>(UserApiPaths.Profile, { data });
  }

  async editPassword(data: EditPasswordData) {
    return userApi.put(UserApiPaths.Password, { data });
  }

  async editAvatar(data: FormData) {
    return userApi.put<User>(`${UserApiPaths.Profile}${UserApiPaths.Avatar}`, {
      data,
      headers: {},
    });
  }

  async search(data: SearchData) {
    return userApi.post<User[]>(UserApiPaths.Search, {
      data,
    });
  }
}
