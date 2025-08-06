import { Router } from '../../core';
import type { ButtonProps, InputFieldProps } from '../../components';
import type { PagesNames } from '../../constants';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../config';

export interface AuthPageProps {
  title: string;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
  isLoading?: boolean;
  name: PagesNames;
}
