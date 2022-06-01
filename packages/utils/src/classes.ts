/**
 *
 * @param value - Target type in the props
 * @param prefix - Prefix string of the className
 * @returns The result className
 */
export function stringOrBooleanCls(value?: string | boolean, prefix?: string) {
  const isBoolean = typeof value === 'boolean';
  let result;
  if (value !== undefined) {
    result = isBoolean ? prefix : `${prefix}-${value}`;
  }
  return result;
}

/**
 *
 * @param value - Target type in the props
 * @param cls - False and True className
 * @returns The result className
 */
export function booleanCls(value?: boolean, cls?: { trueCls?: string; falseCls?: string }) {
  let result;
  if (value !== undefined) {
    result = value ? cls?.trueCls : cls?.falseCls;
  }
  return result;
}
