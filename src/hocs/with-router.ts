import type { PagesDataUnionProps } from '../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withRouter(Component: new (props: PagesDataUnionProps) => any) {
  return class extends Component {
    constructor(props: PagesDataUnionProps) {
      super({ ...props, router: window.router });
    }
  };
}
