import { Router } from '../../core';
import type { ButtonProps } from '../../components';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../config';

export interface ErrorPageProps {
  title: string;
  subTitle: string;
  control: ButtonProps;
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
}
