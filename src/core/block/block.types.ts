import { EventNames } from '../../constants';
import { Block } from './block';

export interface BlockProps {
  className?: string;
  attrs?: { [key: string]: unknown };
  events?: { [key in EventNames]?: EventListener };
  [key: string]: unknown;
}

export interface BlockBase<
  T extends HTMLElement = HTMLElement,
  P extends BlockProps = BlockProps,
> {
  getContent: () => T | null;
  getChildren: () => Record<string, Block | Block[]>;
  getProps: () => P;
  dispatchComponentDidMount: () => void;
  setProps: (nextProps: P) => void;
  removeDOM: () => void;
  componentWillUnmount: () => void;
}
