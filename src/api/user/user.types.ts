import { InputNames } from '../../constants';

export interface User {
  id: number;
  [InputNames.FIRST_NAME]: string;
  [InputNames.SECOND_NAME]: string;
  [InputNames.DISPLAY_NAME]: string;
  [InputNames.PHONE]: string;
  [InputNames.LOGIN]: string;
  [InputNames.AVATAR]: string;
  [InputNames.EMAIL]: string;
  [key: string]: unknown;
}

export interface EditProfileData {
  [InputNames.FIRST_NAME]?: string;
  [InputNames.SECOND_NAME]?: string;
  [InputNames.LOGIN]?: string;
  [InputNames.EMAIL]?: string;
  [InputNames.PASS]?: string;
  [InputNames.PHONE]?: string;
  [key: string]: unknown;
}

export interface EditPasswordData {
  [InputNames.OLD_PASSWORD]: string;
  [InputNames.NEW_PASSWORD]: string;
  [key: string]: unknown;
}

export interface SearchData {
  [InputNames.LOGIN]: string;
  [key: string]: unknown;
}

export interface UserApiBase {
  editProfile: (data: EditProfileData) => Promise<User>;
  editPassword: (data: EditPasswordData) => Promise<XMLHttpRequest>;
  editAvatar: (data: FormData) => Promise<User>;
  search: (data: SearchData) => Promise<User[]>;
}
