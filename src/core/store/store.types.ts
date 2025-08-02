import type { UserInfoResponse, EditProfileResponse } from '../../api';

export interface AppState {
  isLoading: boolean;
  user: UserInfoResponse | EditProfileResponse | null;
}

export interface StoreBase {
  getState: () => AppState;
  set: (nextState: Partial<AppState>) => void;
}
