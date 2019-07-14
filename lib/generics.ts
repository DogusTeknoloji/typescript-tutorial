import { Shapes } from "./namespaces";

// generics, en zor konulardan ama çok çok önemli
export class Helper {

    public static getTotalArea(...shapes: Shapes.IShape[]) {
        return shapes.reduce((s1, s2) => s1 + s2.area(), 0);
    }

    public static getTotalCircumference(...shapes: Shapes.IShape[]) {
        return shapes.reduce((s1, s2) => s1 + s2.circumference(), 0);
    }
}

export interface IGenericCalc<T> {
    add(t1: T, t2: T): T;
    subtract(t1: T, t2: T): T;
}

// tslint:disable-next-line:max-classes-per-file
export class NumberCalc implements IGenericCalc<number> {

    public add(t1: number, t2: number) {
        return t1 + t2;
    }

    public subtract(t1: number, t2: number): number {
        return t1 - t2;
    }
}

// tslint:disable-next-line:max-classes-per-file
export class StringCalc implements IGenericCalc<string> {

    public add(t1: string, t2: string): string {
        return t1 + t2;
    }

    public subtract(t1: string, t2: string): string {
        return t1.replace(t2, "");
    }
}
