import { type Nullable, isNull } from '../nullable/nullable.js';
import { isUndefined, type Undefinable } from '../undefinable/undefinable.js';
import { type Result, isErr, createOk, unwrapOk } from './result.js';

/**
 *  Transposes a `Result` of an `Nullable<T>` into an `Nullable<T>` of a `Result`.
 *
 *  - `Ok(T)` -> `Ok(T)`
 *  - `Ok(null)` -> `null`
 *  - `Err(E)` -> `Err(E)`
 */
export function transposeResultToNullable<T, E>(
    input: Result<Nullable<T>, E>,
): Nullable<Result<T, E>> {
    if (isErr(input)) {
        return input;
    }

    const inner: Nullable<T> = unwrapOk(input);
    if (isNull(inner)) {
        return null;
    }

    return createOk<T>(inner);
}

/**
 *  Transposes a `Result` of an `Undefinable<T>` into an `Undefinable<T>` of a `Result`.
 *
 *  - `Ok(T)` -> `Ok(T)`
 *  - `Ok(undefined)` -> `undefined`
 *  - `Err(E)` -> `Err(E)`
 */
export function transposeResultToUndefinable<T, E>(
    input: Result<Undefinable<T>, E>,
): Undefinable<Result<T, E>> {
    if (isErr(input)) {
        return input;
    }

    const inner: Undefinable<T> = unwrapOk(input);
    if (isUndefined(inner)) {
        return undefined;
    }

    return createOk<T>(inner);
}
