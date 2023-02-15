/* eslint-disable no-unused-vars */
type PromiseMap<T> = {[K in keyof T]: Promise<T[K]>};
declare global {
  interface PromiseConstructor {
    props<T>(promises: PromiseMap<T>): Promise<T>;
  }
}

Promise.props = async <T>(promises: PromiseMap<T>): Promise<T> => {
  let i;
  const keys = Object.keys(promises) as Array<keyof T>;
  const promiseArray = Array(keys.length);
  for (i = 0; i < keys.length; i += 1) {
    promiseArray[i] = promises[keys[i]];
  }

  const resolvedValues = await Promise.all(promiseArray);

  const result = {} as T;
  for (i = 0; i < keys.length; i += 1) {
    result[keys[i]] = resolvedValues[i];
  }
  return result;
};

export {};
