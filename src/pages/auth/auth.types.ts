import { Router } from '../../core';
import type { ButtonProps, InputFieldProps } from '../../components';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../constants';

export interface AuthPageProps {
  title: string;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
}
