/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>, AllSettledResult<T6>, AllSettledResult<T7>, AllSettledResult<T8>, AllSettledResult<T9>, AllSettledResult<T10>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>, AllSettledResult<T6>, AllSettledResult<T7>, AllSettledResult<T8>, AllSettledResult<T9>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>, AllSettledResult<T6>, AllSettledResult<T7>, AllSettledResult<T8>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>, AllSettledResult<T6>, AllSettledResult<T7>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>, AllSettledResult<T6>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>, AllSettledResult<T5>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>, AllSettledResult<T4>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>, AllSettledResult<T3>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[AllSettledResult<T1>, AllSettledResult<T2>]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of
   * the provided Promises resolve, or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T>(values: readonly (T | PromiseLike<T>)[]): Promise<AllSettledResult<T>[]>;
}

interface AllSettledResult<T> {
    status: 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
}
