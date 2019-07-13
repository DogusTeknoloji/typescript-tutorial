// tslint:disable-next-line:no-var-keyword prefer-const
var no = 1.4;

// tslint:disable-next-line:prefer-const
let firstName = "Zaphod";

// tslint:disable-next-line:semicolon
const lastName: string = "Beeblebrox"

// lastName = "";  çalışmaz!

if (firstName) {
    let localVar: number = 21;
    const localConst = 42;
    localVar += 21;
}
// ES5 ve üzeri için localVar burada erişilemez

// any tipindeki değişkenlere her değer atanabilir,
// C# gibi değil, C# any değişkene uymayan tip atamanıza izin vermez. daha çok object gibi
let anyVar: any;
anyVar = no;
// bu arada ";" optional, kural esneterek ya da hiç kural kullanmayarak ";" atlanabilir
// tslint:disable-next-line:semicolon
anyVar = firstName

// interpolation, string içine değer gömebiliyoruz
console.log(`anyVar: ${anyVar}`);
// typeof: undefined, object, boolean, number, string, function (Symbol vs.. Advanced JavaScript eğitiminde)
console.log(`anyVar tipi: ${typeof anyVar}`);

import Animal from "./Animal";
const monster = new Animal("Headcrab");
// instanceof
console.log(`monster inherits from Animal? ${monster instanceof Animal}`);
// peki bizim sınıfımız için typeof ne diyor?
console.log(`typeof monster is: ${typeof monster}`);

const objLiteral = {
    // tslint:disable-next-line:object-literal-key-quotes
    "anyVar": anyVar,
    // tslint:disable-next-line:object-literal-shorthand
    firstName: firstName,
    lastName,
    no,
};

const objClass = new Animal("Demogorgon");

// intellisense çalışır
console.log(objLiteral.firstName);

// özelliklere dictionary gibi erişebiliriz,
// tırnak içinde de intellisense çalışıyor (artık, ilk versiyonlarda bu özellik yoktu)
// tslint:disable-next-line:no-string-literal
console.log(objClass["name"]);

// objeyi any tipine atayarak istediğimizi yapabiliriz
const objAny1 = objLiteral as any;
console.log(objAny1.firstName);

// tslint:disable-next-line:no-angle-bracket-type-assertion
const objAny2 = <any> objClass;
console.log(objAny2.name);

// dizi tipini otomatik tanır, number[]
const array1 = [1, 2, 3, 4, 5];
// tslint:disable-next-line:array-type
const array2: Array<number> = [1, 2, 3, 4, 5];
const array3: number[] = [1, 2, 3, 4, 5];
// array3 = ["bu", 1, "kod", 2, "hatalı"];

// operatörler tahmin ettiğiniz gibi, detaya girmeye gerek yok :) merak ettiğinizi sorunuz
// +, -, *, /, %, ++, --, >, >=, <, <=, ==, !=, ===, !==, &&, ||, !, &, |, ^, ~, <<, >>, >>>, =, +=, -=, *=, /=
// ilginç bir kullanımı, benim de arada kullandığım bir trick
// tslint:disable-next-line:no-bitwise
if (~array1.indexOf(3)) {
    console.log("array1 '3' içeriyor.");
}
// indexOf elemanı bulamazsa -1 döner, -1 tüm sayılar içinde ters bitleri alındığında 0 dönen tek sayıdır
// böylece if (0) demiş oluyoruz, 0'da JavaScript için falsy bir değer.
// tüm bunları if (array1.indexOf(3) !== -1) yazmamak için yaptık :P

// değinmemiz gereken önemli bir nokta var, && ve || JavaScript dolayısıyla TypeScript için ve/veya değil
// && son bulduğun truthy (doğrumsu), || ilk bulduğun truthy değeri al demek
const weirdAndOr = (objLiteral && objLiteral.firstName) || "default";
console.log(`weirdAndOr: ${weirdAndOr}`);
