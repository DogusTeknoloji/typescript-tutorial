// geliştirdiğimiz her şeyi gruplayabiliriz, aynen C# gibi

// tslint:disable-next-line:no-namespace
export namespace Shapes {
    export interface IShape {
        name: string;
        circumference(): number;
        area(): number;
    }

    export class Square implements IShape {

        public readonly name = "Kare";

        constructor(public readonly side: number) {
        }

        public circumference(): number {
            return this.side * 4;
        }

        public area(): number {
            // kareyi farklı bir şekilde alalım, bu fonksiyonları intellisense ile öğrenebilirsiniz
            return Math.pow(this.side, 2);
        }
    }

    // tslint:disable-next-line:max-classes-per-file
    export class Circle implements IShape {

        public readonly name = "Çember";

        constructor(public readonly radius: number) {
        }

        public circumference() {
            return 2 * Math.PI * this.radius;
        }

        public area() {
            return Math.PI * this.radius * this.radius;
        }
    }
}
