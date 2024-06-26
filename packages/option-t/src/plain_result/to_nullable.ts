import type { Nullable } from '../nullable/nullable.js';
import { unwrapErrOrForResult } from './internal/unwrap_err_or.js';
import type { Result } from './result.js';
import { unwrapOrForResult } from './unwrap_or.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromOk<T>(input: Result<T, unknown>): Nullable<T> {
    const val: Nullable<T> = unwrapOrForResult<Nullable<T>>(input, null);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromErr<E>(input: Result<unknown, E>): Nullable<E> {
    const err: Nullable<E> = unwrapErrOrForResult<Nullable<E>>(input, null);
    return err;
}
