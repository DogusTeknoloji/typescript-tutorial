// gelişmiş dizi işlemleri
const a1 = new Array(4);
const a2 = new Array("So", "long", "thanks", "for", "all", "the", "fish");
// !!! ÖDÜL !!!
let a = 4;
let b = 2;
[b, a] = [a, b];

// | ile değişkenler (union)
let unknown: string | number;
unknown = "Ford";
unknown = 42;

// interfaces
export interface ICar {
    make: string;
    model: string;
    year: number;
    hp?: number;
}
// javascript interface bilmez, typescript sadece tip kontrolleri için kullanır
// dolayısıyla üretilen kodda yer almaz!
export class Porsche implements ICar {

    public make = "Porsche";
    public model: string;
    public year: number;
    public hp: number;

    constructor(model: string, year: number, hp?: number) {
        this.model = model;
        this.year = year;
        this.hp = hp || 300;
    }
}

export function sayModel(car: ICar) {
    console.log(car.model);
}

// const s = typeof ICar;  olmaz
// interface aslında tip tanımıdır
// tslint:disable-next-line:interface-over-type-literal
declare type CarType = { make: string, model: string, year: number, hp?: number };
const targa: CarType = new Porsche("Targa 4S", 2016);
// aslında aynı şeyler ama interface implement edilebilir, genişletilebilir ve birleştirilebilir

interface ICrossover extends ICar {
    weight: number;
}

// tslint:disable-next-line:max-classes-per-file
export class Macan extends Porsche implements ICrossover {
    public weight: number;

    constructor(year: number) {
        super("Macan", year, 248);

        this.weight = 1925;
    }
}

// tslint:disable-next-line:interface-over-type-literal
export type CaymanOptions = {
    launchControl: boolean,
    sport: boolean;
    sportPlus: boolean;
};

// sınıflar detay
// tslint:disable-next-line:max-classes-per-file
export class Cayman extends Porsche implements ICar {

    // get-set property tanımı yapabiliyoruz
    // tslint:disable-next-line:variable-name
    private _launchControl = false;
    get launchControl(): boolean {
        return this._launchControl;
    }
    set launchControl(value: boolean) {
        this._launchControl = value;
    }

    constructor(year: number, options: CaymanOptions) {
        super("Cayman", year, 300);

        this.launchControl = options.launchControl;
        // obje parçalama (Destructuring)
        const { sport, sportPlus } = options;
        if (sportPlus) {
            this.hp += 20;
        } else if (sport) {
            this.hp += 10;
        }
    }
}

// burada objenin tipi verilmemiş, anonim
const o = { launchControl: true, sport: true, sportPlus: false };
// tipsiz bir obje eğer uygunsa tipli gibi davranabiliyoruz
// bu işleme ne deniyor? (bir hayvandan geliyor!)
const cayman = new Cayman(2019, o);

// tipleri genişletebiliriz
// tslint:disable-next-line:interface-over-type-literal
type Options911 = { convertible: boolean } & CaymanOptions;
// daraltabiliriz de
type Options944 = { sport: boolean } | CaymanOptions;
