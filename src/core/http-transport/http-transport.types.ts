import { FETCH_METHODS } from '../../constants';

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: FETCH_METHODS;
  data?: Record<string, unknown> | FormData;
  timeout?: number;
}

export type RequestHttpMethod = <T = XMLHttpRequest>(
  url: string,
  options?: RequestOptions,
) => Promise<T>;

export interface HTTPTransportBase {
  get: RequestHttpMethod;
  post: RequestHttpMethod;
  put: RequestHttpMethod;
  delete: RequestHttpMethod;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StringIndexed = Record<string, any>;
