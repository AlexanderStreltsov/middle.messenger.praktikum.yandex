import { API_URL, FETCH_METHODS, HttpStatus } from '../../constants';
import type {
  RequestOptions,
  HTTPTransportBase,
  RequestHttpMethod,
} from './http-transport.types';
import { queryStringify } from './http-transport.utils';

export class HTTPTransport implements HTTPTransportBase {
  private apiUrl: string;

  constructor(apiPath: string) {
    this.apiUrl = `${API_URL}${apiPath}`;
  }

  private request = <T>(
    url: string,
    options: RequestOptions = { method: FETCH_METHODS.GET },
    timeout: number = 5000,
  ): Promise<T> => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const isGet = method === FETCH_METHODS.GET;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) =>
        xhr.setRequestHeader(key, headers[key]),
      );

      xhr.onload = () => {
        if (xhr.status !== HttpStatus.OK) {
          reject(xhr.response);
          return;
        }

        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };

  public get: RequestHttpMethod = (url: string, options = {}) =>
    this.request(
      `${this.apiUrl}${url}`,
      { ...options, method: FETCH_METHODS.GET },
      options.timeout,
    );

  public post: RequestHttpMethod = (url: string, options = {}) =>
    this.request(
      `${this.apiUrl}${url}`,
      {
        ...options,
        headers: { 'Content-Type': 'application/json' },
        method: FETCH_METHODS.POST,
      },
      options.timeout,
    );

  public put: RequestHttpMethod = (url, options = {}) =>
    this.request(
      `${this.apiUrl}${url}`,
      { ...options, method: FETCH_METHODS.PUT },
      options.timeout,
    );

  public delete: RequestHttpMethod = (url, options = {}) =>
    this.request(
      `${this.apiUrl}${url}`,
      { ...options, method: FETCH_METHODS.DELETE },
      options.timeout,
    );
}
