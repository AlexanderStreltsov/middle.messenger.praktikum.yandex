import { expect } from 'chai';
import sinon, { type SinonFakeTimers, type SinonSpy } from 'sinon';

import type { PagesDataUnionProps } from '../../config';
import { Block } from '../block';
import { Route } from '../route';
import { Router } from './router';

describe('Router', () => {
  class TestBlock extends Block {
    constructor() {
      super();
    }

    render() {
      return '';
    }
  }

  const router = new Router('#app');
  const defaultProps = {} as PagesDataUnionProps;
  const pathname = '/test';
  const pathname1 = '/test1';

  it('should be singleton', () => {
    const newRouter = new Router('');
    expect(newRouter).to.equal(router);
  });

  it('should be create route by pathname', () => {
    router.use(pathname, TestBlock, defaultProps);
    expect(router.getRoute(pathname)).to.be.instanceOf(Route);
  });

  it('should not be create another route', () => {
    expect(router.getRoute(pathname1)).to.equal(undefined);
  });

  it('should be add one more route instance by pathname1', () => {
    router.use(pathname1, TestBlock, defaultProps);
    expect(router.getRoute(pathname1)).to.be.instanceOf(Route);
  });

  it('should be go to route with pathname', () => {
    router.go(pathname);
    expect(window.location.pathname).to.equal(pathname);
  });

  describe('check go forward and back with location pathname', () => {
    let clock: SinonFakeTimers;

    beforeEach(() => {
      clock = sinon.useFakeTimers();
    });

    afterEach(() => {
      clock.restore();
    });

    it('should be go back', async () => {
      router.go(pathname1);
      router.go(pathname);
      router.back();
      clock.tick(1);
      expect(window.location.pathname).to.equal(pathname1);
    });

    it('should be go forward', async () => {
      router.go(pathname1);
      router.go(pathname);
      router.back();
      clock.tick(1);
      router.forward();
      clock.tick(1);
      expect(window.location.pathname).to.equal(pathname);
    });
  });

  describe('check go forward and back with called history api', () => {
    let spy: SinonSpy;

    beforeEach(() => {
      spy = sinon.spy();
    });

    afterEach(() => {
      spy.restore();
    });

    it('should be go back', async () => {
      spy = sinon.spy(window.history, 'back');
      router.back();
      expect(spy.calledOnce).to.equal(true);
    });

    it('should be go forward', async () => {
      spy = sinon.spy(window.history, 'forward');
      router.forward();
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
