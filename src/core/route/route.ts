import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
  PagesDataTemplates,
} from '../../config';
import { renderDom } from '../../utils';
import type { RouteBase } from './route.types';

export class Route<
  P extends PagesDataUnionProps = PagesDataUnionProps,
  T extends PagesDataTemplatesConstructor = PagesDataTemplatesConstructor,
  C extends PagesDataTemplates = PagesDataTemplates,
> implements RouteBase
{
  private _pathname: string;
  private _blockClass: T;
  private _block: C | null = null;
  private _props: { rootQuery: string; context: P };

  constructor(
    pathname: string,
    view: T,
    props: { rootQuery: string; context: P },
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
  }

  public navigate = (pathname: string) => {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  };

  public leave = () => {
    if (this._block) {
      this._block.removeDOM();
      this._block = null;
    }
  };

  public match = (pathname: string) => pathname === this._pathname;

  public render = () => {
    this.leave();
    this._block = new this._blockClass(this._props.context) as C;
    renderDom(this._props.rootQuery, this._block);
    this._block?.dispatchComponentDidMount();
  };
}
