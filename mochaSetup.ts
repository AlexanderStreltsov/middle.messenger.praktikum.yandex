import { JSDOM } from 'jsdom';

import { Router, Store } from './src/core';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from './src/config';

const dom = new JSDOM(
  `<!DOCTYPE html><html><body><div id="app"></div></body></html>`,
  {
    url: 'http://localhost',
    pretendToBeVisual: true,
  },
);

declare global {
  interface Window {
    router: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
    store: Store;
  }
}

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  navigator: { userAgent: 'node.js' } as Navigator,
  Node: dom.window.Node,
  Element: dom.window.Element,
  HTMLElement: dom.window.HTMLElement,
  HTMLDivElement: dom.window.HTMLDivElement,
  Event: dom.window.Event,
  CustomEvent: dom.window.CustomEvent,
  MutationObserver: dom.window.MutationObserver,
  XMLHttpRequest: dom.window.XMLHttpRequest,
  Blob: dom.window.Blob,
  FormData: dom.window.FormData,
});
