export type TransformFn<in T, out U> = (input: T) => U;
export type RecoveryFn<out T> = () => T;
export type RecoveryFromErrorFn<in E, out T> = TransformFn<E, T>;
export type EffectFn<in T> = (input: T) => void;
export type FilterFn<in T> = (input: T) => boolean;
export type TypePredicateFn<in T, out U extends T> = (input: T) => input is U;
export type ProducerFn<out T> = () => T;
export type ZipTransformerFn<in T, in U, out R> = (a: T, b: U) => R;

export type AsyncFilterFn<in T> = (input: T) => Promise<boolean>;
export type AsyncTransformFn<in T, out U> = TransformFn<T, Promise<U>>;
export type AsyncRecoveryFn<out T> = RecoveryFn<Promise<T>>;
export type AsyncRecoveryFromErrorFn<in E, out T> = AsyncTransformFn<E, T>;
export type AsyncProducerFn<out T> = ProducerFn<Promise<T>>;
export type AsyncZipTransformerFn<in T, in U, out R> = (a: T, b: U) => Promise<R>;
