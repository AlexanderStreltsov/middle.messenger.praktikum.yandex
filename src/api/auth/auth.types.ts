import { InputNames } from '../../constants';
import type { User } from '../user';

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
  id: number;
}

export interface SignInData {
  [InputNames.LOGIN]: string;
  [InputNames.PASS]: string;
  [key: string]: unknown;
}

export interface AuthApiBase {
  signUp: (data: SignUpData) => Promise<SignUpResponse>;
  signIn: (data: SignInData) => Promise<XMLHttpRequest>;
  getUserInfo: () => Promise<User>;
  logout: () => Promise<XMLHttpRequest>;
}
