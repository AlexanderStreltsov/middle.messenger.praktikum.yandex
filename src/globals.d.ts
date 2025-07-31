import { Router } from './core';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from './constants';

declare global {
  interface Window {
    router: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
  }
}
