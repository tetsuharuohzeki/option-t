/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */
import {
    pathRedirectionTo,
    pathRedirectionForLegacy,
    pathRedirectionForRoot,
    pathRedirectionMarkedAsDeprecated,
} from './api_path_descriptor.mjs';

const MAYBE_DIR = 'maybe';
const NULLABLE_DIR = 'nullable';
const UNDEFINABLE_DIR = 'undefinable';
const PLAIN_OPTION_DIR = 'plain_option';
const PLAIN_RESULT_DIR = 'plain_result';

export const apiTable = Object.freeze({
    '.': pathRedirectionForRoot('index'),

    'ClassicOption': pathRedirectionForLegacy('classic_option/index'),
    'ClassicResult': pathRedirectionForLegacy('classic_result/index'),

    'Maybe': pathRedirectionTo(`${MAYBE_DIR}/index`),
    'Maybe/Maybe': pathRedirectionTo(`${MAYBE_DIR}/maybe`),
    'Maybe/and': pathRedirectionTo(`${MAYBE_DIR}/and`),
    'Maybe/andThen': pathRedirectionTo(`${MAYBE_DIR}/and_then`),
    'Maybe/andThenAsync': pathRedirectionTo(`${MAYBE_DIR}/and_then_async`),
    'Maybe/compat/v33': pathRedirectionMarkedAsDeprecated(`${MAYBE_DIR}/compat/v33`),
    'Maybe/expect': pathRedirectionMarkedAsDeprecated(`${MAYBE_DIR}/expect`),
    'Maybe/inspect': pathRedirectionTo(`${MAYBE_DIR}/inspect`),
    'Maybe/map': pathRedirectionTo(`${MAYBE_DIR}/map`),
    'Maybe/mapAsync': pathRedirectionTo(`${MAYBE_DIR}/map_async`),
    'Maybe/mapOr': pathRedirectionTo(`${MAYBE_DIR}/map_or`),
    'Maybe/mapOrAsync': pathRedirectionTo(`${MAYBE_DIR}/map_or_async`),
    'Maybe/mapOrElse': pathRedirectionTo(`${MAYBE_DIR}/map_or_else`),
    'Maybe/mapOrElseAsync': pathRedirectionTo(`${MAYBE_DIR}/map_or_else_async`),
    'Maybe/namespace': pathRedirectionTo(`${MAYBE_DIR}/namespace`),
    'Maybe/okOr': pathRedirectionTo(`${MAYBE_DIR}/ok_or`),
    'Maybe/okOrElse': pathRedirectionTo(`${MAYBE_DIR}/ok_or_else`),
    'Maybe/okOrElseAsync': pathRedirectionTo(`${MAYBE_DIR}/ok_or_else_async`),
    'Maybe/or': pathRedirectionTo(`${MAYBE_DIR}/or`),
    'Maybe/orElse': pathRedirectionTo(`${MAYBE_DIR}/or_else`),
    'Maybe/orElseAsync': pathRedirectionTo(`${MAYBE_DIR}/or_else_async`),
    'Maybe/toNullable': pathRedirectionTo(`${MAYBE_DIR}/to_nullable`),
    'Maybe/toPlainResult': pathRedirectionTo(`${MAYBE_DIR}/to_plain_result`),
    'Maybe/toUndefinable': pathRedirectionTo(`${MAYBE_DIR}/to_undefinable`),
    'Maybe/unwrap': pathRedirectionMarkedAsDeprecated(`${MAYBE_DIR}/unwrap`),
    'Maybe/unwrapOr': pathRedirectionTo(`${MAYBE_DIR}/unwrap_or`),
    'Maybe/unwrapOrElse': pathRedirectionTo(`${MAYBE_DIR}/unwrap_or_else`),
    'Maybe/unwrapOrElseAsync': pathRedirectionTo(`${MAYBE_DIR}/unwrap_or_else_async`),
    'Maybe/xor': pathRedirectionTo(`${MAYBE_DIR}/xor`),
    'Maybe/zip': pathRedirectionTo(`${MAYBE_DIR}/zip`),
    'Maybe/zipWith': pathRedirectionTo(`${MAYBE_DIR}/zip_with`),
    'Maybe/zipWithAsync': pathRedirectionTo(`${MAYBE_DIR}/zip_with_async`),

    'Nullable': pathRedirectionTo(`${NULLABLE_DIR}/index`),
    'Nullable/Nullable': pathRedirectionTo(`${NULLABLE_DIR}/nullable`),
    'Nullable/and': pathRedirectionTo(`${NULLABLE_DIR}/and`),
    'Nullable/andThen': pathRedirectionTo(`${NULLABLE_DIR}/and_then`),
    'Nullable/andThenAsync': pathRedirectionTo(`${NULLABLE_DIR}/and_then_async`),
    'Nullable/compat/v33': pathRedirectionMarkedAsDeprecated(`${NULLABLE_DIR}/compat/v33`),
    'Nullable/expect': pathRedirectionMarkedAsDeprecated(`${NULLABLE_DIR}/expect`),
    'Nullable/inspect': pathRedirectionTo(`${NULLABLE_DIR}/inspect`),
    'Nullable/map': pathRedirectionTo(`${NULLABLE_DIR}/map`),
    'Nullable/mapAsync': pathRedirectionTo(`${NULLABLE_DIR}/map_async`),
    'Nullable/mapOr': pathRedirectionTo(`${NULLABLE_DIR}/map_or`),
    'Nullable/mapOrAsync': pathRedirectionTo(`${NULLABLE_DIR}/map_or_async`),
    'Nullable/mapOrElse': pathRedirectionTo(`${NULLABLE_DIR}/map_or_else`),
    'Nullable/mapOrElseAsync': pathRedirectionTo(`${NULLABLE_DIR}/map_or_else_async`),
    'Nullable/namespace': pathRedirectionTo(`${NULLABLE_DIR}/namespace`),
    'Nullable/okOr': pathRedirectionTo(`${NULLABLE_DIR}/ok_or`),
    'Nullable/okOrElse': pathRedirectionTo(`${NULLABLE_DIR}/ok_or_else`),
    'Nullable/okOrElseAsync': pathRedirectionTo(`${NULLABLE_DIR}/ok_or_else_async`),
    'Nullable/or': pathRedirectionTo(`${NULLABLE_DIR}/or`),
    'Nullable/orElse': pathRedirectionTo(`${NULLABLE_DIR}/or_else`),
    'Nullable/orElseAsync': pathRedirectionTo(`${NULLABLE_DIR}/or_else_async`),
    'Nullable/toPlainResult': pathRedirectionTo(`${NULLABLE_DIR}/to_plain_result`),
    'Nullable/toUndefinable': pathRedirectionTo(`${NULLABLE_DIR}/to_undefinable`),
    'Nullable/unwrap': pathRedirectionMarkedAsDeprecated(`${NULLABLE_DIR}/unwrap`),
    'Nullable/unwrapOr': pathRedirectionTo(`${NULLABLE_DIR}/unwrap_or`),
    'Nullable/unwrapOrElse': pathRedirectionTo(`${NULLABLE_DIR}/unwrap_or_else`),
    'Nullable/unwrapOrElseAsync': pathRedirectionTo(`${NULLABLE_DIR}/unwrap_or_else_async`),
    'Nullable/xor': pathRedirectionTo(`${NULLABLE_DIR}/xor`),
    'Nullable/zip': pathRedirectionTo(`${NULLABLE_DIR}/zip`),
    'Nullable/zipWith': pathRedirectionTo(`${NULLABLE_DIR}/zip_with`),
    'Nullable/zipWithAsync': pathRedirectionTo(`${NULLABLE_DIR}/zip_with_async`),

    'PlainOption': pathRedirectionTo(`${PLAIN_OPTION_DIR}/index`),
    'PlainOption/Option': pathRedirectionTo(`${PLAIN_OPTION_DIR}/option`),
    'PlainOption/and': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and`),
    'PlainOption/andThen': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and_then`),
    'PlainOption/andThenAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/and_then_async`),
    'PlainOption/asMut': pathRedirectionTo(`${PLAIN_OPTION_DIR}/as_mut`),
    'PlainOption/compat/v33': pathRedirectionMarkedAsDeprecated(`${PLAIN_OPTION_DIR}/compat/v33`),
    'PlainOption/drop': pathRedirectionTo(`${PLAIN_OPTION_DIR}/drop`),
    'PlainOption/equal': pathRedirectionTo(`${PLAIN_OPTION_DIR}/equal`),
    'PlainOption/expect': pathRedirectionMarkedAsDeprecated(`${PLAIN_OPTION_DIR}/expect`),
    'PlainOption/filter': pathRedirectionTo(`${PLAIN_OPTION_DIR}/filter`),
    'PlainOption/flatten': pathRedirectionTo(`${PLAIN_OPTION_DIR}/flatten`),
    'PlainOption/inspect': pathRedirectionTo(`${PLAIN_OPTION_DIR}/inspect`),
    'PlainOption/map': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map`),
    'PlainOption/mapAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_async`),
    'PlainOption/mapOr': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or`),
    'PlainOption/mapOrAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_async`),
    'PlainOption/mapOrElse': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_else`),
    'PlainOption/mapOrElseAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/map_or_else_async`),
    'PlainOption/namespace': pathRedirectionTo(`${PLAIN_OPTION_DIR}/namespace`),
    'PlainOption/okOr': pathRedirectionTo(`${PLAIN_OPTION_DIR}/ok_or`),
    'PlainOption/okOrElse': pathRedirectionTo(`${PLAIN_OPTION_DIR}/ok_or_else`),
    'PlainOption/or': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or`),
    'PlainOption/orElse': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or_else`),
    'PlainOption/orElseAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/or_else_async`),
    'PlainOption/toNullable': pathRedirectionTo(`${PLAIN_OPTION_DIR}/to_nullable`),
    'PlainOption/toUndefinable': pathRedirectionTo(`${PLAIN_OPTION_DIR}/to_undefinable`),
    'PlainOption/transpose': pathRedirectionTo(`${PLAIN_OPTION_DIR}/transpose`),
    'PlainOption/unwrap': pathRedirectionMarkedAsDeprecated(`${PLAIN_OPTION_DIR}/unwrap`),
    'PlainOption/unwrapOr': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unwrap_or`),
    'PlainOption/unwrapOrElse': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unwrap_or_else`),
    'PlainOption/unwrapOrElseAsync': pathRedirectionTo(`${PLAIN_OPTION_DIR}/unwrap_or_else_async`),
    'PlainOption/xor': pathRedirectionTo(`${PLAIN_OPTION_DIR}/xor`),

    'PlainResult': pathRedirectionTo(`${PLAIN_RESULT_DIR}/index`),
    'PlainResult/Result': pathRedirectionTo(`${PLAIN_RESULT_DIR}/result`),
    'PlainResult/and': pathRedirectionTo(`${PLAIN_RESULT_DIR}/and`),
    'PlainResult/andThen': pathRedirectionTo(`${PLAIN_RESULT_DIR}/and_then`),
    'PlainResult/andThenAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/and_then_async`),
    'PlainResult/asMut': pathRedirectionTo(`${PLAIN_RESULT_DIR}/as_mut`),
    'PlainResult/compat/v33': pathRedirectionMarkedAsDeprecated(`${PLAIN_RESULT_DIR}/compat/v33`),
    'PlainResult/drop': pathRedirectionTo(`${PLAIN_RESULT_DIR}/drop`),
    'PlainResult/equal': pathRedirectionTo(`${PLAIN_RESULT_DIR}/equal`),
    'PlainResult/expect': pathRedirectionMarkedAsDeprecated(`${PLAIN_RESULT_DIR}/expect`),
    'PlainResult/flatten': pathRedirectionTo(`${PLAIN_RESULT_DIR}/flatten`),
    'PlainResult/fromPromiseSettledResult': pathRedirectionTo(
        'plain_result/from_promise_settled_result'
    ),
    'PlainResult/inspect': pathRedirectionTo(`${PLAIN_RESULT_DIR}/inspect`),
    'PlainResult/map': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map`),
    'PlainResult/mapAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_async`),
    'PlainResult/mapErr': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_err`),
    'PlainResult/mapErrAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_err_async`),
    'PlainResult/mapOr': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_or`),
    'PlainResult/mapOrAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_or_async`),
    'PlainResult/mapOrElse': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_or_else`),
    'PlainResult/mapOrElseAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/map_or_else_async`),
    'PlainResult/namespace': pathRedirectionTo(`${PLAIN_RESULT_DIR}/namespace`),
    'PlainResult/or': pathRedirectionTo(`${PLAIN_RESULT_DIR}/or`),
    'PlainResult/orElse': pathRedirectionTo(`${PLAIN_RESULT_DIR}/or_else`),
    'PlainResult/orElseAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/or_else_async`),
    'PlainResult/toNullable': pathRedirectionTo(`${PLAIN_RESULT_DIR}/to_nullable`),
    'PlainResult/toOption': pathRedirectionTo(`${PLAIN_RESULT_DIR}/to_option`),
    'PlainResult/toUndefinable': pathRedirectionTo(`${PLAIN_RESULT_DIR}/to_undefinable`),
    'PlainResult/transpose': pathRedirectionTo(`${PLAIN_RESULT_DIR}/transpose`),
    'PlainResult/tryCatch': pathRedirectionTo(`${PLAIN_RESULT_DIR}/try_catch`),
    'PlainResult/tryCatchAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/try_catch_async`),
    'PlainResult/unwrap': pathRedirectionMarkedAsDeprecated(`${PLAIN_RESULT_DIR}/unwrap`),
    'PlainResult/unwrapOr': pathRedirectionTo(`${PLAIN_RESULT_DIR}/unwrap_or`),
    'PlainResult/unwrapOrElse': pathRedirectionTo(`${PLAIN_RESULT_DIR}/unwrap_or_else`),
    'PlainResult/unwrapOrElseAsync': pathRedirectionTo(`${PLAIN_RESULT_DIR}/unwrap_or_else_async`),
    'PlainResult/unwrapOrThrowError': pathRedirectionTo(
        `${PLAIN_RESULT_DIR}/unwrap_or_throw_error`
    ),

    'Undefinable': pathRedirectionTo(`${UNDEFINABLE_DIR}/index`),
    'Undefinable/Undefinable': pathRedirectionTo(`${UNDEFINABLE_DIR}/undefinable`),
    'Undefinable/and': pathRedirectionTo(`${UNDEFINABLE_DIR}/and`),
    'Undefinable/andThen': pathRedirectionTo(`${UNDEFINABLE_DIR}/and_then`),
    'Undefinable/andThenAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/and_then_async`),
    'Undefinable/compat/v33': pathRedirectionMarkedAsDeprecated(`${UNDEFINABLE_DIR}/compat/v33`),
    'Undefinable/expect': pathRedirectionMarkedAsDeprecated(`${UNDEFINABLE_DIR}/expect`),
    'Undefinable/inspect': pathRedirectionTo(`${UNDEFINABLE_DIR}/inspect`),
    'Undefinable/map': pathRedirectionTo(`${UNDEFINABLE_DIR}/map`),
    'Undefinable/mapAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/map_async`),
    'Undefinable/mapOr': pathRedirectionTo(`${UNDEFINABLE_DIR}/map_or`),
    'Undefinable/mapOrAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/map_or_async`),
    'Undefinable/mapOrElse': pathRedirectionTo(`${UNDEFINABLE_DIR}/map_or_else`),
    'Undefinable/mapOrElseAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/map_or_else_async`),
    'Undefinable/namespace': pathRedirectionTo(`${UNDEFINABLE_DIR}/namespace`),
    'Undefinable/okOr': pathRedirectionTo(`${UNDEFINABLE_DIR}/ok_or`),
    'Undefinable/okOrElse': pathRedirectionTo(`${UNDEFINABLE_DIR}/ok_or_else`),
    'Undefinable/okOrElseAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/ok_or_else_async`),
    'Undefinable/or': pathRedirectionTo(`${UNDEFINABLE_DIR}/or`),
    'Undefinable/orElse': pathRedirectionTo(`${UNDEFINABLE_DIR}/or_else`),
    'Undefinable/orElseAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/or_else_async`),
    'Undefinable/toNullable': pathRedirectionTo(`${UNDEFINABLE_DIR}/to_nullable`),
    'Undefinable/toPlainResult': pathRedirectionTo(`${UNDEFINABLE_DIR}/to_plain_result`),
    'Undefinable/unwrap': pathRedirectionMarkedAsDeprecated(`${UNDEFINABLE_DIR}/unwrap`),
    'Undefinable/unwrapOr': pathRedirectionTo(`${UNDEFINABLE_DIR}/unwrap_or`),
    'Undefinable/unwrapOrElse': pathRedirectionTo(`${UNDEFINABLE_DIR}/unwrap_or_else`),
    'Undefinable/unwrapOrElseAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/unwrap_or_else_async`),
    'Undefinable/xor': pathRedirectionTo(`${UNDEFINABLE_DIR}/xor`),
    'Undefinable/zip': pathRedirectionTo(`${UNDEFINABLE_DIR}/zip`),
    'Undefinable/zipWith': pathRedirectionTo(`${UNDEFINABLE_DIR}/zip_with`),
    'Undefinable/zipWithAsync': pathRedirectionTo(`${UNDEFINABLE_DIR}/zip_with_async`),
});
