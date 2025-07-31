import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import { HTMLElements, EventNames } from '../../constants';
import { EventBus } from '../event-bus';
import type { BlockProps, BlockBase } from './block.types';

export abstract class Block<
  T extends HTMLElement = HTMLElement,
  P extends BlockProps = BlockProps,
> implements BlockBase<T, P>
{
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  private _element: T | null;
  private readonly _id: string;
  private readonly _meta: {
    tagName: HTMLElements;
    props: P;
  };

  protected props: P;
  protected children: Record<string, Block | Block[]>;
  protected eventBus: () => EventBus<string, Record<string, P>>;

  constructor(
    tagName: HTMLElements = HTMLElements.DIV,
    propsWithChildren: P = {} as P,
  ) {
    this._element = null;
    this._id = nanoid(6);

    const eventBus = new EventBus<string, Record<string, P>>();
    this.eventBus = () => eventBus;

    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this.children = children;
    this.props = this._makePropsProxy(props);
    this._meta = {
      tagName,
      props,
    };

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  abstract render(): string;

  private _getChildrenAndProps = (propsAndChildren: P) => {
    const children: Record<string, Block | Block[]> = {};
    const props: P = {} as P;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        (props as Record<string, unknown>)[key] = value;
      }
    });

    return { children, props };
  };

  private _makePropsProxy = (props: P): P => {
    const eventBus = this.eventBus();
    const emitBind = eventBus.emit.bind(eventBus);

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };
        (target as Record<string | symbol, unknown>)[prop] = value;
        emitBind(Block.EVENTS.FLOW_CDU, {
          oldProps: oldTarget,
          newProps: target,
        });
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  };

  private _registerEvents = (
    eventBus: EventBus<string, Record<string, P>>,
  ): void => {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  };

  private _createDocumentElement = <T>(tagName: HTMLElements): T =>
    document.createElement(tagName) as T;

  private _createResources = (): void => {
    const { tagName, props } = this._meta;

    this._element = this._createDocumentElement<T>(tagName);

    if (props.className) {
      const classes = props.className.split(' ');
      this._element.classList.add(...classes);
    }

    if (props.attrs) {
      Object.entries(props.attrs).forEach(([attrName, attrValue]) => {
        this._element?.setAttribute(attrName, attrValue as string);
      });
    }
  };

  private _compile = () => {
    const propsAndStubs = { ...this.props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        (propsAndStubs as Record<string, unknown>)[key] = child.map(
          (component) => `<div data-id="${component._id}"></div>`,
        );
      } else {
        (propsAndStubs as Record<string, unknown>)[key] =
          `<div data-id="${child._id}"></div>`;
      }
    });

    const fragment = this._createDocumentElement<HTMLTemplateElement>(
      HTMLElements.TEMPLATE,
    );

    const template = Handlebars.compile(this.render());
    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((component) => {
          const stub = fragment.content.querySelector(
            `[data-id="${component._id}"]`,
          );

          stub?.replaceWith(component.getContent() as HTMLElement);
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

        stub?.replaceWith(child.getContent() as HTMLElement);
      }
    });

    return fragment.content;
  };

  private _removeEvents = () => {
    const { events = {} }: P = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(
        eventName,
        events[eventName as EventNames] as EventListener,
      );
    });
  };

  private _addEvents() {
    const { events = {} }: P = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(
        eventName,
        events[eventName as EventNames] as EventListener,
      );
    });
  }

  private _render = (): void => {
    this._removeEvents();
    const block = this._compile();

    if (this._element?.children.length === 0) {
      this._element.appendChild(block);
    } else {
      this._element?.replaceChildren(block);
    }

    this._addEvents();
  };

  private _componentDidMount = () => this.componentDidMount();

  private _componentDidUpdate = (props?: Record<string, P>) => {
    const response = this.componentDidUpdate(props);
    if (!response) {
      return;
    }
    this._render();
  };

  protected init = () => {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  };

  protected componentDidMount = () => {};

  protected componentDidUpdate = (props?: Record<string, P>) => props;

  public getContent = () => this._element;

  public getChildren = () => this.children;

  public getProps = () => this.props;

  public dispatchComponentDidMount = () =>
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public show = () => {
    if (this._element) {
      this._element.style.display = 'block';
    }
  };

  public hide = () => {
    if (this._element) {
      this._element.style.display = 'none';
    }
  };

  public removeDOM = () => {
    this._removeEvents();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((component) => component.removeDOM());
      } else {
        child.removeDOM();
      }
    });

    this._element?.remove();
    this._element = null;
  };
}
