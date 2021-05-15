import test from 'ava';

import { expectNotNullAndUndefined } from '../../__dist/esm/Maybe/expect.mjs';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        const EXPECTED_MSG = 'expected test';
        let result;
        t.notThrows(() => {
            result = expectNotNullAndUndefined(INPUT, EXPECTED_MSG);
        });
        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);

        const EXPECTED_MSG = 'expected test';
        t.throws(
            () => {
                expectNotNullAndUndefined(NULL_VALUE, EXPECTED_MSG);
            },
            {
                instanceOf: TypeError,
                message: EXPECTED_MSG,
            }
        );
    });
}
