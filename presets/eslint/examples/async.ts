/**
 * Functions that return a promise should be marked async.
 *
 * In general, non-async functions that return promises can do three things:
 *
 * 1. Return a promise that will resolve.
 * 2. Return a promise that will be rejected with an exception.
 * 3. Throw an exception directly.
 *
 * Number 3 is counter intuitive and should be avoided.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async
export const testNeedsAsync = (): Promise<string> => {
  return new Promise((resolve) => resolve('Hello world!'));
};

/**
 * Ideally this would actually be ok, but the current configuration options don't allow for this.
 *
 * If this could be made ok, it could be a very minor performance increase.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async
export const testSimpleAsync = (): Promise<string> =>
  new Promise((resolve) => resolve('Hello world!'));

/**
 * Ensure that returning an async value inside a try statement uses `return await`.
 *
 * This is important for clarities sake. If you don't return await then any exceptions in the promise you are returning
 * *will not* be captured by the try catch surrounding that statement. This is extremely counter intuitive.
 */
export const testReturnAwait = async (): Promise<string> => {
  try {
    // eslint-disable-next-line @typescript-eslint/return-await
    return new Promise((resolve) => resolve('Hello world!'));
  } catch (e: unknown) {
    throw new Error(`Failure: ${(e as { message?: string }).message}`);
  }
};
