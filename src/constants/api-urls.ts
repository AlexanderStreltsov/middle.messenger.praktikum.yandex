const PROTOCOL_HTTPS = 'https://';
const PROTOCOL_WSS = 'wss://';
const URL = 'ya-praktikum.tech';

const API_BASE_URL = `${PROTOCOL_HTTPS}${URL}/api`;
const API_VERSION = 'v2';

export const API_URL = `${API_BASE_URL}/${API_VERSION}`;
export const API_RESOURCES_URL = `${API_BASE_URL}/${API_VERSION}/resources`;
export const API_WS_URL = `${PROTOCOL_WSS}${URL}/ws/chats`;

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
  Search = '/search',
}

export enum ChatsApiPaths {
  Chats = '/chats',
  Common = '/common',
  Users = '/users',
  Token = '/token',
}
