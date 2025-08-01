import type { UserInfoResponse } from '../../api';

export interface AppState {
  isLoading: boolean;
  user: UserInfoResponse | null;
}

export interface StoreBase {
  getState: () => AppState;
  set: (nextState: Partial<AppState>) => void;
}
