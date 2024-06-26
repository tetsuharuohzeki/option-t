export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
    // FIXME(#2173):
    // It's might better to expose this type as `Type`.
} from '../nullable.js';

export { andThenForNullable as andThen } from '../and_then.js';
export { andThenAsyncForNullable as andThenAsync } from '../and_then_async.js';
export { inspectNullable as inspect } from '../inspect.js';
export { mapForNullable as map } from '../map.js';
export { mapAsyncForNullable as mapAsync } from '../map_async.js';
export { mapOrForNullable as mapOr } from '../map_or.js';
export { mapOrAsyncForNullable as mapOrAsync } from '../map_or_async.js';
export { mapOrElseForNullable as mapOrElse } from '../map_or_else.js';
export { mapOrElseAsyncForNullable as mapOrElseAsync } from '../map_or_else_async.js';
export { okOrForNullable as okOr } from '../ok_or.js';
export { okOrElseForNullable as okOrElse } from '../ok_or_else.js';
export { okOrElseAsyncForNullable as okOrElseAsync } from '../ok_or_else_async.js';
export { orElseForNullable as orElse } from '../or_else.js';
export { orElseAsyncForNullable as orElseAsync } from '../or_else_async.js';
export {
    toResultErrFromNullable as toResultErr,
    toResultOkFromNullable as toResultOk,
} from '../to_plain_result.js';
export { toUndefinableFromNullable as toUndefinable } from '../to_undefinable.js';
export { unwrapOrForNullable as unwrapOr } from '../unwrap_or.js';
export { unwrapOrElseForNullable as unwrapOrElse } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable as unwrapOrElseAsync } from '../unwrap_or_else_async.js';

// XXX:
//  _and_ operator is equivalent of `a && b` so we don't ship it by this default set.
//
// XXX:
//  _or_ operation is equivalent of `a || b` so we don't ship it by default set.
//
// XXX:
//  To keep a simple API set,
//  we don't expose APIs from here that takes multiple values to compose a data flow pipeline.
//  We may reconsider it if pipeline operator syntax proposal is advanced to the standard.
//  But please import them directly from their path at this moment.
//
//  - filter
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
