import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { toUndefinableFromOption } from 'option-t/plain_option/to_undefinable';

const VALUE_T = Math.random();

test('input is Some(T)', (t) => {
    const input = createSome(VALUE_T);
    const actual = toUndefinableFromOption(input);

    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    const input = createNone();
    const actual = toUndefinableFromOption(input);

    t.is(actual, undefined);
});
