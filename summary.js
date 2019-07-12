var number1 = 1.3, number2 = NaN;
// Not a Number: hesap sonucu sayı olmamış, 0/0 gibi
var string1 = "Double's", string2 = 'Single"s';
var bool = true;
var object = { a: "1", "b": 2 };
var array = [1, 2, 3, 4, 5];
var NULL = null;
var UNDEFINED1 = undefined, UNDEFINED2;
undefined = 42; // dikkat! undefined değiştirilebilir, "void 0" genel kullanılan bir yaklaşım
var UNDEFINED3 = undefined; // 42 olacak, deli işi evet

typeof NaN; // "number", evet çok mantıklı, Not a Number "number" tipinde!

if (number1 == 1.3 || number1 === 1.3) {
    // iki eşittir verileri ortak tipe çevirip karşılaştırır (Type Coercion)
    // üç eşittir direk değerleri karşılaştırır. en çok sorulan en çok hata yapılan interview sorusu
}

if (string1) {
    // falsy 6 adet değer var, false, 0, "", null, undefined, NaN
}

"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"

function func1() {
    return 42;
}

// burada fonksiyonun adı yok, call stack'te çıkmayacak
var func2 = function() {
    return 42;
}

var func2_2 = function func2() {
    return 42;
}

var func3 = () => 42;

// hayatımda yüzlerce kez şahit olduğum, yazılımcıların en çok zorlandığı IIFE (Immediately Invoked Function Expression)
(function() {
    return 42;
})();

// değişkenler buldukları ilk scope'a yapışır. sadece fonksiyonların scope'u olur
if (true){
    var i = 5;
}
// burada "i" erişilebilir, çünkü global scope'a eklendi! bad parts içinde bu da var
console.log(i);

// IIFE scope sorununa genel çözüm
(function() {
    var j = 5;
})();
// console.log(j);  hata verecek

var Animal = function(name) {
    this.name = name;
}
Animal.prototype.makeNoise = function() {
    throw new Error('Not implemented');
};

var Dog = function(name) {
    Animal.call(this, name)
}
Dog.prototype = new Animal();
Dog.prototype.makeNoise = function() {
    console.log(this.name + ' diyor ki: Hav');
};

var d = new Dog('Rintintin');
d.makeNoise();

var hackerAnimal = { name: 'Hırsız' };
var newMakeNoise = d.makeNoise.bind(hackerAnimal);
newMakeNoise();

String.prototype.firstLetter = function() {
    return this && this[0];
};

console.log("42".firstLetter());
