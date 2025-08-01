import { HTTPTransport } from '../../core';
import { AuthApiPaths } from '../../constants';
import type {
  AuthApiBase,
  SignUpData,
  SignInData,
  SignUpResponse,
  UserInfoResponse,
} from './auth.types';

const authApi = new HTTPTransport(AuthApiPaths.Auth);

export class AuthApi implements AuthApiBase {
  async signUp(data: SignUpData) {
    return authApi.post<SignUpResponse>(AuthApiPaths.SignUp, {
      data,
    });
  }

  async signIn(data: SignInData) {
    return authApi.post<XMLHttpRequest>(AuthApiPaths.SignIn, { data });
  }

  async getUserInfo() {
    return authApi.get<UserInfoResponse>(AuthApiPaths.UserInfo);
  }

  async logout() {
    return authApi.post<XMLHttpRequest>(AuthApiPaths.Logout);
  }
}
