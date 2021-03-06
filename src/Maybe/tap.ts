import { EffectFn } from '../internal/Function';
import { Maybe } from './Maybe';

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with _input_ if _input_ is not `null` and `undefined`.
 *
 *  * This was added to sort with others or future enhancement to accept chaining functions.
 *    We recommend to use simple `if` statement or similar way and they would be more efficient.
 */
export function tapMaybe<T>(input: Maybe<T>, effector: EffectFn<T>): Maybe<T> {
    if (input !== undefined && input !== null) {
        effector(input);
    }

    return input;
}
