import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { unwrapOption } from '../../__dist/esm/PlainOption/unwrap.mjs';

const EXPECTED = Symbol('some_value');

test('Some(T)', (t) => {
    const input = createSome(EXPECTED);
    t.is(unwrapOption(input), EXPECTED);
});

test('None', (t) => {
    t.throws(
        () => {
            const input = createNone();
            unwrapOption(input);
        },
        {
            instanceOf: TypeError,
            message: 'called with `None`',
        }
    );
});