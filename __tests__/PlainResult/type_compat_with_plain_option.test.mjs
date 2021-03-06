import test from 'ava';

import { createSome, createNone, isSome, isNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { createOk, createErr, isOk, isErr } from '../../__dist/esm/PlainResult/Result.mjs';

const FUNC_TABLE = [
    [createSome, isOk],
    [createNone, isErr],
    [createOk, isSome],
    [createErr, isNone],
];

for (const [factory, typeguardFn] of FUNC_TABLE) {
    test(`The object generated by ${factory.name}() should be compatible with ${typeguardFn.name}()`, (t) => {
        const v = Symbol('');
        const input = factory(v);
        const actual = typeguardFn(input);
        t.is(actual, true);
    });
}
