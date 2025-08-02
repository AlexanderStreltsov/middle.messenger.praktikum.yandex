const API_BASE_URL = 'https://ya-praktikum.tech/api';
const API_VERSION = 'v2';

export const API_URL = `${API_BASE_URL}/${API_VERSION}`;
export const API_RESOURCES_URL = `${API_BASE_URL}/${API_VERSION}/resources`;

export enum AuthApiPaths {
  Auth = '/auth',
  SignIn = '/signin',
  SignUp = '/signup',
  Logout = '/logout',
  User = '/user',
}

export enum UserApiPaths {
  User = '/user',
  Profile = '/profile',
  Password = '/password',
  Avatar = '/avatar',
}
