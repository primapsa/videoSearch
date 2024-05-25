import React from 'react';
import { Loader } from '@/components/loader';

export const withLoading =
  <P extends object>(Component: React.ComponentType<P>, isLoading: boolean): React.FC<P> =>
  (props: P) =>
    isLoading ? <Loader /> : <Component {...props} />;

export const withEmptyContent =
  <P extends object>(
    ComponentA: React.ComponentType<P>,
    ComponentB: React.ComponentType<P>,
    isEmpty: boolean
  ): React.FC<P> =>
  (props: P) =>
    isEmpty ? <ComponentB {...props} /> : <ComponentA {...props} />;
