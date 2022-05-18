/**
 *
 * @param value Target type in the props
 * @param prefix Prefix string of the classname
 * @returns The result classname
 */
export function stringOrBooleanCls(value?: string | boolean, prefix?: string) {
  const isBoolean = typeof value === 'boolean';
  let result;
  if (value) {
    result = isBoolean ? prefix : `${prefix}-${value}`;
  }
  return result;
}
