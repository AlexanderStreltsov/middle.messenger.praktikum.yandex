import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../config';
import { Route } from '../route';

export interface RouterBase<
  P extends PagesDataUnionProps = PagesDataUnionProps,
  T extends PagesDataTemplatesConstructor = PagesDataTemplatesConstructor,
> {
  use: (pathname: string, block: T, props: P) => this;
  start: () => void;
  go: (pathname: string) => void;
  back: () => void;
  forward: () => void;
  getRoute: (pathname: string) => Route<P, T> | undefined;
}
