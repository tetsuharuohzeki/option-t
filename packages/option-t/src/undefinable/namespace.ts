/**
 *  XXX:
 *  This module is designed to use as `import * as Undefinable from 'option-t/Undefinable/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotUndefined,
    type Undefinable,
    // XXX:
    //  If we export self type as `Type`, vscode's IntelliSense (tsserver) will try to import `Type`
    //  or import it directly from this path when you input `T` of `Type` or some case you want to import `Type`.
    //  Because this module path is exposed to userland via `exports` field.
    //  It's less ergonomic so we don't export here.
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
    andThen,
    andThenAsync,
    inspect,
    map,
    mapAsync,
    mapOr,
    mapOrAsync,
    mapOrElse,
    mapOrElseAsync,
    okOr,
    okOrElse,
    okOrElseAsync,
    orElse,
    orElseAsync,
    toNullable,
    toResultOk,
    toResultErr,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
