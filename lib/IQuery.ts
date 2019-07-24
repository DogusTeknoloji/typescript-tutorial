export interface IQuery<T> {
    where(predicate: (x: T) => boolean): IQuery<T>;
    select<TOut>(selector: (x: T) => TOut): IQuery<TOut>;
    skip(value: number): IQuery<T>;
    take(value: number): IQuery<T>;
    toArray(): T[];
}
