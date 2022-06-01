import * as React from 'react';

/**
 * navigation context types
 */
export type NavigationContextType = {};

/**
 * navigation context
 */
export const NavigationContext = React.createContext<NavigationContextType>({});

/**
 * navigation provider types
 */
export type NavigationProviderType = {
  children: React.ReactNode;
};

/**
 * navigation provider component
 * @param props NavigationProviderType
 * @returns
 */
export function NavigationProvider(props: NavigationProviderType) {
  const { children } = props;

  const context = React.useMemo(() => ({}), []);

  return <NavigationContext.Provider value={context}>{children}</NavigationContext.Provider>;
}
