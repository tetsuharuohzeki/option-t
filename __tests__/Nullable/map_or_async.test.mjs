import test from 'ava';

import { mapOrAsyncForNullable } from '../../__dist/esm/Nullable/mapOrAsync.mjs';
import { nonNullableValue } from '../utils.mjs';

const nonNullableValueCaseList = nonNullableValue.map((input) => {
    if (input instanceof Promise) {
        // Promise will be unwrap recursively automatically.
        // There is no ways to unwrap single level now.
        // So we need to care that.
        return [input, input, 'this is promise'];
    }

    return [input, input, input];
});

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseList) {
    test('pass the value: ' + String(INPUT), async (t) => {
        t.plan(4);

        const result = mapOrAsyncForNullable(INPUT, Symbol('def'), async (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE, 'passed value should not be expected');
            return v;
        });

        t.true(result instanceof Promise, 'result should be Promise');
        const actual = await result;
        t.is(actual, EXPECTED, 'final value should be expected');
    });
}

test('pass null', async (t) => {
    t.plan(2);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrAsyncForNullable(null, DEFAULE_VAL, async (_v) => {
        t.fail('should not call selector fn');
        return COMPUTED_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, DEFAULE_VAL);
});

test('pass undefined', async (t) => {
    t.plan(4);

    const DEFAULE_VAL = Symbol('');
    const COMPUTED_VAL = Symbol('');
    const result = mapOrAsyncForNullable(undefined, DEFAULE_VAL, async (v) => {
        t.pass('should call selector fn');
        t.is(v, undefined);
        return COMPUTED_VAL;
    });

    t.true(result instanceof Promise, 'result should be Promise');
    const actual = await result;
    t.is(actual, COMPUTED_VAL);
});

{
    const testcases = [[1, 2, null]];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Nullable<*> as the selector's result, v = ${String(
            src
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(2);

            await t.throwsAsync(
                async () => {
                    await mapOrAsyncForNullable(src, def, async (_v) => {
                        t.pass('this should be called');
                        return selectorResult;
                    });
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`transformer` must not return `null`',
                }
            );
        });
    }
}

{
    const testcases = [[null, null, '']];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Nullable<*>', v = ${String(src)}, def = ${String(
            def
        )}, selectorResult=${String(selectorResult)}`, async (t) => {
            t.plan(1);

            await t.throwsAsync(
                async () => {
                    await mapOrAsyncForNullable(src, def, async (_v) => {
                        t.fail('do not call this');
                        return selectorResult;
                    });
                    t.fail('do not reach here');
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null`',
                }
            );
        });
    }
}

test('callback should return Promise', async (t) => {
    t.plan(2);

    await t.throwsAsync(
        async () => {
            const INPUT = Math.random();
            await mapOrAsyncForNullable(INPUT, 1, () => {
                t.pass('this should be called');
                return Math.random();
            });
            t.fail('do not reach here');
        },
        {
            instanceOf: TypeError,
            message: '`transformer` must return Promise',
        }
    );
});
