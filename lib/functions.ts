// zorunlu, varsayılan değerli ve opsiyonel parametreler
function log(message: string, severity = 0, detail?: string): void {
    // hmm neydi bu?!?!?
    detail = detail || "";
    const msg = `message: ${message}, detail: ${detail}`;
    if (severity === 0) {
        console.log(msg);
    } else if (severity === 1) {
        console.warn(msg);
    } else {
        console.error(msg);
    }
}

// değişken sayılı parametreler
function countEven1(...nums: number[]): number {
    let s = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            s++;
        }
    }
    return s;
}

// değişken sayılı parametreler
function countEven2(...nums: number[]): number {
    let s = 0;
    // yeni for..of özelliği, typescript desteklenmeyen ortamlar için doğru kodu üretecek
    for (const i of nums) {
        if (s % 2 === 0) {
            s++;
        }
    }
    return s;
}

// !!! ÖDÜL !!!
// typescript konusu değil ama filter, map/reduce çokomelli
const countEven3 = (...nums: number[]) => nums.filter((i) => i % 2 === 0).map((i) => 1).reduce((i1, i2) => i1 + i2);

// ne biçim dil yahu bu?
const dynamicFuncTmp = new Function("a", "b", "return a + b");
// !!! ÖDÜL !!!
const dynamicFunc = dynamicFuncTmp as (a: number, b: number) => number;

// fonksiyonlar parametre tipi olabiliyor
function stringArray(numbers: number[], mapper: (i1: number) => string) {
    return numbers.map(mapper, numbers);
}

// değişkenler birden fazla tip alabiliyor?
function numberify(x: number | string) {
    return typeof x === "number" ? x : x.length;
}

// foksiyonları overload edebiliyoruz
function stringify(x: object, length?: number): string;
// tslint:disable-next-line:unified-signatures
function stringify(x: number): string;
// tslint:disable-next-line:unified-signatures
function stringify(x: string): string;
function stringify(x: any, length: number = 10): string {
    if (typeof x === "object") {
        return JSON.stringify(x).substr(0, length);
    } else if (typeof x === "number") {
        return x.toString();
    } else {
        return x;
    }
}

// sonradan export edebiliriz
export default log;

// toplu export yapabiliyoruz
export {
    // isim değiştirebiliyoruz
    countEven3 as countEven,
    dynamicFunc,
    stringArray,
    numberify,
    stringify,
};

// !!! ÖDÜL !!!
// export nasıl olacak?
