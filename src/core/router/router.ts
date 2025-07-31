import {
  type PagesDataUnionProps,
  type PagesDataTemplatesConstructor,
  RoutesNames,
} from '../../constants';
import { Route } from '../route';
import { type RouterBase } from './router.types';

export class Router<
  P extends PagesDataUnionProps = PagesDataUnionProps,
  T extends PagesDataTemplatesConstructor = PagesDataTemplatesConstructor,
> implements RouterBase<P, T>
{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static __instance: Router<any, any>;

  private routes: Route<P, T>[] = [];
  private history: History = window.history;
  private _currentRoute: Route<P, T> | null = null;
  private _rootQuery!: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  private _onRoute = (pathname: string) => {
    const route = this.getRoute(pathname);

    if (!route) {
      this.go(RoutesNames.error404);
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  };

  public use = (pathname: string, block: T, props: P) => {
    const route = new Route<P, T>(pathname, block, {
      rootQuery: this._rootQuery,
      context: props,
    });

    this.routes.push(route);

    return this;
  };

  public start = () => {
    window.onpopstate = ((event: PopStateEvent) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  };

  public go = (pathname: string) => {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  };

  public back = () => this.history.back();

  public forward = () => this.history.forward();

  public getRoute = (pathname: string) =>
    this.routes.find((route) => route.match(pathname));
}
