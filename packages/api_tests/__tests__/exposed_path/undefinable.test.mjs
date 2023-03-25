import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './cjs/Undefinable/Undefinable': null,
        './cjs/Undefinable/and': null,
        './cjs/Undefinable/andThen': null,
        './cjs/Undefinable/andThenAsync': null,
        './cjs/Undefinable/expect': null,
        './cjs/Undefinable/compat/v33': null,
        './cjs/Undefinable/inspect': null,
        './cjs/Undefinable': null,
        './cjs/Undefinable/map': null,
        './cjs/Undefinable/mapAsync': null,
        './cjs/Undefinable/mapOr': null,
        './cjs/Undefinable/mapOrAsync': null,
        './cjs/Undefinable/mapOrElse': null,
        './cjs/Undefinable/mapOrElseAsync': null,
        './cjs/Undefinable/namespace': null,
        './cjs/Undefinable/okOr': null,
        './cjs/Undefinable/okOrElse': null,
        './cjs/Undefinable/okOrElseAsync': null,
        './cjs/Undefinable/or': null,
        './cjs/Undefinable/orElse': null,
        './cjs/Undefinable/orElseAsync': null,
        './cjs/Undefinable/toNullable': null,
        './cjs/Undefinable/toPlainResult': null,
        './cjs/Undefinable/unwrap': null,
        './cjs/Undefinable/unwrapOr': null,
        './cjs/Undefinable/unwrapOrElse': null,
        './cjs/Undefinable/unwrapOrElseAsync': null,
        './cjs/Undefinable/xor': null,
        './cjs/Undefinable/zip': null,
        './cjs/Undefinable/zipWith': null,
        './cjs/Undefinable/zipWithAsync': null,

        './esm/Undefinable/Undefinable': null,
        './esm/Undefinable/and': null,
        './esm/Undefinable/andThen': null,
        './esm/Undefinable/andThenAsync': null,
        './esm/Undefinable/compat/v33': null,
        './esm/Undefinable/expect': null,
        './esm/Undefinable/inspect': null,
        './esm/Undefinable': null,
        './esm/Undefinable/map': null,
        './esm/Undefinable/mapAsync': null,
        './esm/Undefinable/mapOr': null,
        './esm/Undefinable/mapOrAsync': null,
        './esm/Undefinable/mapOrElse': null,
        './esm/Undefinable/mapOrElseAsync': null,
        './esm/Undefinable/namespace': null,
        './esm/Undefinable/okOr': null,
        './esm/Undefinable/okOrElse': null,
        './esm/Undefinable/okOrElseAsync': null,
        './esm/Undefinable/or': null,
        './esm/Undefinable/orElse': null,
        './esm/Undefinable/orElseAsync': null,
        './esm/Undefinable/toNullable': null,
        './esm/Undefinable/toPlainResult': null,
        './esm/Undefinable/unwrap': null,
        './esm/Undefinable/unwrapOr': null,
        './esm/Undefinable/unwrapOrElse': null,
        './esm/Undefinable/unwrapOrElseAsync': null,
        './esm/Undefinable/xor': null,
        './esm/Undefinable/zip': null,
        './esm/Undefinable/zipWith': null,
        './esm/Undefinable/zipWithAsync': null,

        './Undefinable': null,
        './Undefinable/and': null,
        './Undefinable/andThen': null,
        './Undefinable/andThenAsync': null,
        './Undefinable/expect': null,
        './Undefinable/compat/v33': null,
        './Undefinable/inspect': null,
        './Undefinable/map': null,
        './Undefinable/mapAsync': null,
        './Undefinable/mapOr': null,
        './Undefinable/mapOrAsync': null,
        './Undefinable/mapOrElse': null,
        './Undefinable/mapOrElseAsync': null,
        './Undefinable/namespace': null,
        './Undefinable/okOr': null,
        './Undefinable/okOrElse': null,
        './Undefinable/okOrElseAsync': null,
        './Undefinable/or': null,
        './Undefinable/orElse': null,
        './Undefinable/orElseAsync': null,
        './Undefinable/toNullable': null,
        './Undefinable/toPlainResult': null,
        './Undefinable/Undefinable': null,
        './Undefinable/unwrap': null,
        './Undefinable/unwrapOr': null,
        './Undefinable/unwrapOrElse': null,
        './Undefinable/unwrapOrElseAsync': null,
        './Undefinable/xor': null,
        './Undefinable/zip': null,
        './Undefinable/zipWith': null,
        './Undefinable/zipWithAsync': null,
    })
);
