import { HTTPTransport } from '../../core';
import { AuthApiPaths } from '../../constants';
import type { User } from '../user';
import type {
  AuthApiBase,
  SignUpData,
  SignInData,
  SignUpResponse,
} from './auth.types';

const authApi = new HTTPTransport(AuthApiPaths.Auth);

export class AuthApi implements AuthApiBase {
  async signUp(data: SignUpData) {
    return authApi.post<SignUpResponse>(AuthApiPaths.SignUp, { data });
  }

  async signIn(data: SignInData) {
    return authApi.post(AuthApiPaths.SignIn, { data });
  }

  async getUserInfo() {
    return authApi.get<User>(AuthApiPaths.User);
  }

  async logout() {
    return authApi.post(AuthApiPaths.Logout);
  }
}
