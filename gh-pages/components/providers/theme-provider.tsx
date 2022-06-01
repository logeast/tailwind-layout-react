import * as React from 'react';

/**
 * navigation context types
 */
export type ThemeContextType = {};

/**
 * theme context
 */
export const ThemeContext = React.createContext<ThemeContextType>({});

/**
 * themes
 */
export const themes = [];

/**
 * theme provider types
 */
export type ThemeProviderType = {
  children: React.ReactNode;
};

/**
 * theme provider component
 * @param props ThemeProviderType
 * @returns
 */
export const ThemeProvider = (props: ThemeProviderType) => {
  const { children } = props;

  const context = React.useMemo(() => ({}), []);

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
