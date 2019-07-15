import { IQuery } from "./IQuery";

enum ExpressionType {
    where, select, skip, take,
}

interface IExpression {
    type: ExpressionType;
    value: any;
}

export class ArrayQuery<T> implements IQuery<T> {

    private expressions: IExpression[] = [];

    constructor(private array: T[], expressions: IExpression[] = []) {
        this.expressions = expressions;
    }

    public where(predicate: (x: T) => boolean): IQuery<T> {
        const newExpressions = [...this.expressions, { type: ExpressionType.where, value: predicate }];

        return new ArrayQuery<T>(this.array, newExpressions);
    }

    public select<TOut>(selector: (x: T) => TOut): IQuery<TOut> {
        const newExpressions = [...this.expressions, { type: ExpressionType.select, value: selector }];

        return new ArrayQuery<TOut>(this.array as any, newExpressions);
    }

    public skip(value: number): IQuery<T> {
        const newExpressions = [...this.expressions, { type: ExpressionType.skip, value }];

        return new ArrayQuery<T>(this.array, newExpressions);
    }

    public take(value: number): IQuery<T> {
        const newExpressions = [...this.expressions, { type: ExpressionType.take, value }];

        return new ArrayQuery<T>(this.array, newExpressions);
    }

    public toArray(): T[] {
        throw new Error("Method not implemented.");
    }
}
