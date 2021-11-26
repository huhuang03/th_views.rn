// null or undefined or empty arra
export function isEmptyArray(v?: any[]): boolean {
  return v === null || v === undefined || v.length === 0;
}
