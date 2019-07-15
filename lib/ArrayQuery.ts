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

    constructor(private array: T[], expressions: IExpression[] = []) {
        this.expressions = expressions;
    }

    public where(predicate: (x: T) => boolean): IQuery<T> {
        return this.clone(ExpressionType.where, predicate);
    }

    public select<TOut>(selector: (x: T) => TOut): IQuery<TOut> {
        return this.clone(ExpressionType.select, selector);
    }

    public skip(value: number): IQuery<T> {
        return this.clone(ExpressionType.skip, value);
    }

    public take(value: number): IQuery<T> {
        return this.clone(ExpressionType.take, value);
    }

    public toArray(): T[] {
        let retVal: any[] = this.array;

        for (const exp of this.expressions) {
            switch (exp.type) {
                case ExpressionType.where:
                    retVal = retVal.filter(exp.value);
                    break;
                case ExpressionType.select:
                    retVal = retVal.map(exp.value);
                    break;
                case ExpressionType.skip:
                    retVal = retVal.slice(exp.value);
                    break;
                case ExpressionType.take:
                    retVal = retVal.slice(0, exp.value);
                    break;
            }
        }

        return retVal;
    }

    private clone<TOut = T>(type: ExpressionType, value: any) {
        const newExpressions = [...this.expressions, { type: ExpressionType.skip, value }];

        return new ArrayQuery<TOut>(this.array as any, newExpressions);
    }
}
