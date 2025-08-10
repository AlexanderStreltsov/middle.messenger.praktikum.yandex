import { expect, use } from 'chai';
import sinonChai from 'sinon-chai';
import { createSandbox, SinonStub } from 'sinon';

import { API_URL } from '../../constants';
import { HTTPTransport } from './http-transport';

describe('HTTPTransport', () => {
  use(sinonChai);
  const sandbox = createSandbox();
  const testData = { data: { test: 'test' } };
  const testUrl = '/test';
  let http: HTTPTransport;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let request: SinonStub<any>;

  beforeEach(() => {
    http = new HTTPTransport('');
    request = sandbox.stub(http, 'request' as keyof typeof http);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should make a GET request', async () => {
    http.get(testUrl);

    expect(request).to.have.been.calledWith(`${API_URL}${testUrl}`, {
      method: 'GET',
    });
  });

  it('should make a POST request', async () => {
    http.post(testUrl, testData);

    expect(request).to.have.been.calledWith(`${API_URL}${testUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: testData.data,
    });
  });

  it('should make a PUT request', async () => {
    http.put(testUrl, testData);

    expect(request).to.have.been.calledWith(`${API_URL}${testUrl}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: testData.data,
    });
  });

  it('should make a PUT request without headers', async () => {
    http.put(testUrl, { ...testData, headers: {} });

    expect(request).to.have.been.calledWith(`${API_URL}${testUrl}`, {
      method: 'PUT',
      headers: {},
      data: testData.data,
    });
  });

  it('should make a DELETE request', async () => {
    http.delete(testUrl, testData);

    expect(request).to.have.been.calledWith(`${API_URL}${testUrl}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: testData.data,
    });
  });
});
