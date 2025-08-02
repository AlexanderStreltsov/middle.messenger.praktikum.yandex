import { HTTPTransport } from '../../core';
import { UserApiPaths } from '../../constants';
import type {
  UserApiBase,
  EditProfileData,
  EditProfileResponse,
  EditPasswordData,
  EditAvatarResponse,
} from './user.types';

const userApi = new HTTPTransport(UserApiPaths.User);

export class UserApi implements UserApiBase {
  async editProfile(data: EditProfileData) {
    return userApi.put<EditProfileResponse>(UserApiPaths.Profile, { data });
  }

  async editPassword(data: EditPasswordData) {
    return userApi.put(UserApiPaths.Password, { data });
  }

  async editAvatar(data: FormData) {
    return userApi.put<EditAvatarResponse>(
      `${UserApiPaths.Profile}${UserApiPaths.Avatar}`,
      { data, headers: {} },
    );
  }
}
