export interface IQuery<T> {
    where(predicate: (x: T) => boolean): IQuery<T>;
    // metodlar da generic olabilir
    select<TOut>(selector: (x: T) => TOut): IQuery<TOut>;
    skip(count: number): IQuery<T>;
    take(count: number): IQuery<T>;
    toArray(): T[];
}

export class Query<T> implements IQuery<T> {

    constructor(private array: T[]) {
    }

    public where(predicate: (x: T) => boolean): IQuery<T> {
        throw new Error("Method not implemented.");
    }

    public select<TOut>(selector: (x: T) => TOut): IQuery<TOut> {
        throw new Error("Method not implemented.");
    }

    public skip(count: number): IQuery<T> {
        throw new Error("Method not implemented.");
    }

    public take(count: number): IQuery<T> {
        throw new Error("Method not implemented.");
    }

    public toArray(): T[] {
        throw new Error("Method not implemented.");
    }
}

declare global {

    // tslint:disable-next-line:interface-name
    interface Array<T> {
        asQueryable(): IQuery<T>;
    }
}

Array.prototype.asQueryable = function() {
    return new Query(this);
};
