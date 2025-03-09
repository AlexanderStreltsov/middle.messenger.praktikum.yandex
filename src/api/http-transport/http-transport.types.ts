import { FETCH_METHODS } from '../../constants';

export interface RequestOptions {
  headers?: Record<string, string>;
  method?: FETCH_METHODS;
  data?: Record<string, unknown>;
  timeout?: number;
}

export type RequestHttpMethod = (
  url: string,
  options?: RequestOptions,
) => Promise<XMLHttpRequest>;

export interface HTTPTransportBase {
  get: RequestHttpMethod;
  post: RequestHttpMethod;
  put: RequestHttpMethod;
  delete: RequestHttpMethod;
  request: (
    url: string,
    options?: RequestOptions,
    timeout?: number,
  ) => Promise<XMLHttpRequest>;
}
