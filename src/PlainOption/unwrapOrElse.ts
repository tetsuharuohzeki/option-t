import { RecoveryFn } from '../internal/Function';
import { Option } from './Option';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then it calls `def` with its value.
 */
export function unwrapOrElseFromOption<T>(input: Option<T>, recoverer: RecoveryFn<T>): T {
    if (input.ok) {
        const val: T = input.val;
        return val;
    }

    const fallback = recoverer();
    return fallback;
}
