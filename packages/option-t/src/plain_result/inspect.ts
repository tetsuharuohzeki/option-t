import type { EffectFn } from '../internal/function.js';
import type { Result } from './result.js';

function noop<T>(_v: T) {}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with the inner value of _input_ if _input_ is `Ok(T)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectOkForResult<T, E>(input: Result<T, E>, effector: EffectFn<T>): Result<T, E> {
    return inspectBothForResult(input, effector, noop);
}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with the inner value of _input_ if _input_ is `Err(E)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectErrForResult<T, E>(
    input: Result<T, E>,
    effector: EffectFn<E>,
): Result<T, E> {
    return inspectBothForResult(input, noop, effector);
}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _okEffector_ with the inner value of _input_ if _input_ is `Ok(T)`.
 *    Otherwise, call _errEffector_ with the inner value if _input_ is `Err(E)`
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectBothForResult<T, E>(
    input: Result<T, E>,
    okEffector: EffectFn<T>,
    errEffector: EffectFn<E>,
): Result<T, E> {
    if (input.ok) {
        okEffector(input.val);
    } else {
        errEffector(input.err);
    }
    return input;
}

/**
 *  @deprecated 32.1.0. Use {@link inspectOkForResult}
 */
export const inspectOk: typeof inspectOkForResult = inspectOkForResult;

/**
 *  @deprecated 32.1.0. Use {@link inspectErrForResult}
 */
export const inspectErr: typeof inspectErrForResult = inspectErrForResult;

/**
 *  @deprecated 32.1.0. Use {@link inspectBothForResult}
 */
export const inspectBoth: typeof inspectBothForResult = inspectBothForResult;

/**
 *  @deprecated 40.7.0
 *  Use {@link inspectOkForResult}
 */
export const inspectOkOfResult: typeof inspectOkForResult = inspectOkForResult;

/**
 *  @deprecated 40.7.0
 *  Use {@link inspectErrForResult}
 */
export const inspectErrOfResult: typeof inspectErrForResult = inspectErrForResult;

/**
 *  @deprecated 40.7.0
 *  Use {@link inspectBothForResult}
 */
export const inspectBothOfResult: typeof inspectBothForResult = inspectBothForResult;
