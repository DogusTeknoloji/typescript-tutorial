class Animal {

    constructor(public name: string) {
    }
}

// tslint:disable-next-line:max-classes-per-file
class Dog extends Animal {

    constructor(name: string) {
        super(name);
    }
}

const r = new Dog("Rintintin");
// tslint:disable-next-line:no-console
console.log(r.name);
