import { FETCH_METHODS } from '../../constants';
import type {
  RequestOptions,
  RequestHttpMethod,
  HTTPTransportBase,
} from './http-transport.types';
import { queryStringify } from './http-transport.utils';

export class HTTPTransport implements HTTPTransportBase {
  public get: RequestHttpMethod = (url, options = {}) =>
    this.request(
      url,
      { ...options, method: FETCH_METHODS.GET },
      options.timeout,
    );

  public post: RequestHttpMethod = (url, options = {}) =>
    this.request(
      url,
      { ...options, method: FETCH_METHODS.POST },
      options.timeout,
    );

  public put: RequestHttpMethod = (url, options = {}) =>
    this.request(
      url,
      { ...options, method: FETCH_METHODS.PUT },
      options.timeout,
    );

  public delete: RequestHttpMethod = (url, options = {}) =>
    this.request(
      url,
      { ...options, method: FETCH_METHODS.DELETE },
      options.timeout,
    );

  public request = (
    url: string,
    options: RequestOptions = { method: FETCH_METHODS.GET },
    timeout: number = 5000,
  ): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === FETCH_METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => resolve(xhr);

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
}
