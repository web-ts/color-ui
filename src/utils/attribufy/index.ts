/**
 * This function takes a list of props and a list of keys to omit and returns
 * a new object with the same props as the first argument, but with the keys
 * from the second argument omitted.
 */

const attribufy =
  <T>(object: T) =>
  <K extends keyof T>(...parts: Array<K>): Omit<T, K> => {
    return (Object.keys(object as any) as Array<keyof T>).reduce((acc, key) => {
      if (!parts.includes(key as any)) {
        acc[key] = object[key];
      }
      return acc;
    }, {} as T);
  };

export default attribufy;
