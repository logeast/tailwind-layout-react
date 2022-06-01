export const isBrowser: boolean =
  typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
