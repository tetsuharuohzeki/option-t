/**
 *  @deprecated 37.1.0
 *
 *  Consider to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value.
 *  In JavaScript, they satisfy almost use cases. Probably, you might not have to use this type.
 *
 *  --------
 *
 *  XXX:
 *  This module is designed to use as `import * as PlainOption from 'option-t/PlainOption/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    createNone,
    createSome,
    expectSome,
    isNone,
    isSome,
    unwrapSome,
    type None,
    type Option,
    type Some,
    // XXX:
    //  If we export self type as `Type`, vscode's IntelliSense (tsserver) will try to import `Type`
    //  or import it directly from this path when you input `T` of `Type` or some case you want to import `Type`.
    //  Because this module path is exposed to userland via `exports` field.
    //  It's less ergonomic so we don't export here.
} from './option.js';

export { andThenForOption as andThen } from './and_then.js';
export { andThenAsyncForOption as andThenAsync } from './and_then_async.js';
export { filterForOption as filter } from './filter.js';
export { flattenForOption as flatten } from './flatten.js';
export { fromErrToOption, fromOkToOption } from './from_result.js';
export { inspectOption as inspect } from './inspect.js';
export { mapForOption as map } from './map.js';
export { mapAsyncForOption as mapAsync } from './map_async.js';
export { mapOrForOption as mapOr } from './map_or.js';
export { mapOrAsyncForOption as mapOrAsync } from './map_or_async.js';
export { mapOrElseForOption as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForOption as mapOrElseAsync } from './map_or_else_async.js';
export { okOrForPlainOption as okOr } from './ok_or.js';
export { okOrElseForPlainOption as okOrElse } from './ok_or_else.js';
export { orElseForOption as orElse } from './or_else.js';
export { orElseAsyncForOption as orElseAsync } from './or_else_async.js';
export { toNullableFromOption as toNullable } from './to_nullable.js';
export { toUndefinableFromOption as toUndefinable } from './to_undefinable.js';
export {
    transposeOptionToResult as transpose,
    transposeResultToOption as transposeFromResult,
} from './transpose.js';
export { unwrapOrForOption as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseForOption as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForOption as unwrapOrElseAsync } from './unwrap_or_else_async.js';

// XXX:
//  We don't expose these itens that is unsafe operation.
//
//  - as_mut
//  - drop
//
// XXX:
//  _equals, we don't expose it by this due to that is provided for exception case
//
// XXX:
//  To keep a simple API set,
//  we don't expose APIs from here that takes multiple values to compose a data flow pipeline.
//  We may reconsider it if pipeline operator syntax proposal is advanced to the standard.
//  But please import them directly from their path at this moment.
//
//  - and
//  - or
//  - filter (This is exception because we shipped it for a long time)
//  - xor
