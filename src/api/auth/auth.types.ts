import { InputNames } from '../../constants';

export interface ErrorApi {
  reason: string;
}

export interface SignUpData {
  [InputNames.FIRST_NAME]: string;
  [InputNames.SECOND_NAME]: string;
  [InputNames.LOGIN]: string;
  [InputNames.EMAIL]: string;
  [InputNames.PASS]: string;
  [InputNames.PHONE]: string;
  [key: string]: unknown;
}

export interface SignUpResponse {
  id: string;
}

export interface SignInData {
  [InputNames.LOGIN]: string;
  [InputNames.PASS]: string;
  [key: string]: unknown;
}

export interface UserInfoResponse {
  id: string;
  [InputNames.FIRST_NAME]: string;
  [InputNames.SECOND_NAME]: string;
  [InputNames.DISPLAY_NAME]: string;
  [InputNames.PHONE]: string;
  [InputNames.LOGIN]: string;
  [InputNames.AVATAR]: string;
  [InputNames.EMAIL]: string;
  [key: string]: unknown;
}

export interface AuthApiBase {
  signUp: (data: SignUpData) => Promise<SignUpResponse>;
  signIn: (data: SignInData) => Promise<XMLHttpRequest>;
  getUserInfo: () => Promise<UserInfoResponse>;
  logout: () => Promise<XMLHttpRequest>;
}
