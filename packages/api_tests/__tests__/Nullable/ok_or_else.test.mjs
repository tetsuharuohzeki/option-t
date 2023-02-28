import test from 'ava';

import { okOrElseForNullable } from 'option-t/Nullable/okOrElse';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/PlainResult/Result';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

const NULL_VALUE_IN_THIS_TEST_CASE = null;
const NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE = undefined;

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const actual = okOrElseForNullable(EXPECTED, () => {
            t.fail('should not call recover fn');
        });

        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

test(`pass ${NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(2);

    const actual = okOrElseForNullable(NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.fail('should not call recover fn');
        return DEFAULT_ERR;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(
        unwrapOk(actual),
        NULLY_VALUE_BUT_NOT_NULL_VALUE_IN_THIS_TEST_CASE,
        'should contain the expected'
    );
});

test(`pass ${NULL_VALUE_IN_THIS_TEST_CASE}`, (t) => {
    t.plan(3);

    const actual = okOrElseForNullable(NULL_VALUE_IN_THIS_TEST_CASE, () => {
        t.pass('should call recover fn');
        return DEFAULT_ERR;
    });

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
});
