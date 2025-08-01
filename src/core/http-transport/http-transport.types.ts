import { FETCH_METHODS } from '../../constants';

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: FETCH_METHODS;
  data?: Record<string, unknown>;
  timeout?: number;
}

export type RequestHttpMethod = <T>(
  url: string,
  options?: RequestOptions,
) => Promise<T>;

export interface HTTPTransportBase {
  get: RequestHttpMethod;
  post: RequestHttpMethod;
  put: RequestHttpMethod;
  delete: RequestHttpMethod;
}
