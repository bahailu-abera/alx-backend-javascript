export const weakMap = new WeakMap();

export function queryAPI(args) {
  const value = weakMap.get(args);
  if (value === undefined) {
    weakMap.set(args, 1);
  } else if (value >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(args, value + 1);
  }
}
