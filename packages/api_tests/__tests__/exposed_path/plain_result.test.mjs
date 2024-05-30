/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './plain_result': null,
        './plain_result/and': null,
        './plain_result/and_then': null,
        './plain_result/and_then_async': null,
        './plain_result/as_mut': null,
        './plain_result/drop': null,
        './plain_result/equal': null,
        './plain_result/flatten': null,
        './plain_result/from_promise_settled_result': null,
        './plain_result/inspect': null,
        './plain_result/is_err_and': null,
        './plain_result/is_ok_and': null,
        './plain_result/map': null,
        './plain_result/map_async': null,
        './plain_result/map_err': null,
        './plain_result/map_err_async': null,
        './plain_result/map_or': null,
        './plain_result/map_or_async': null,
        './plain_result/map_or_else': null,
        './plain_result/map_or_else_async': null,
        './plain_result/namespace': null,
        './plain_result/or': null,
        './plain_result/or_else': null,
        './plain_result/or_else_async': null,
        './plain_result/result': null,
        './plain_result/to_nullable': null,
        './plain_result/to_undefinable': null,
        './plain_result/transpose': null,
        './plain_result/try_catch': null,
        './plain_result/try_catch_async': null,
        './plain_result/unwrap_or': null,
        './plain_result/unwrap_or_else': null,
        './plain_result/unwrap_or_else_async': null,
        './plain_result/unwrap_or_throw': null,
        './plain_result/unwrap_or_throw_error': null,
        './plain_result/unwrap_or_throw_unknown': null,
    }),
);
