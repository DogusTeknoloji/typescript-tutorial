import "./lib/extensions";
import { Helper, NumberCalc, StringCalc } from "./lib/generics";
import { Shapes } from "./lib/namespaces";

const square1 = new Shapes.Square(42);
const circle1 = new Shapes.Circle(42);

console.log(`total area: ${Helper.getTotalArea(square1, circle1)}`);
console.log(`total circumference: ${Helper.getTotalCircumference(square1, circle1)}`);

const numberCalc = new NumberCalc();
console.log(`add 28, 12: ${numberCalc.add(28, 12)}`);
console.log(`subtract 28, 12: ${numberCalc.subtract(28, 12)}`);

const stringCalc = new StringCalc();
console.log(`add Merhaba, Dünya: ${stringCalc.add("Merhaba", "Dünya")}`);
console.log(`subtract Merhaba Dünya, Dünya: ${stringCalc.subtract("Merhaba Dünya", "Dünya")}`);

const array: Shapes.IShape[] = [square1, circle1, new Shapes.Square(21), new Shapes.Circle(32)];
// tüm diziler için yeni bir fonksiyon ekledik :)
const query = array.asQueryable();

try {
    const newArray = query
    .where((i) => i.area() > 100) // alanı 100'den büyük olan şekillerden
    .skip(1) // ilk elemanı atla
    .take(1) // kalanlardan sadece bir tanesini al
    .select((s) => s.circumference()) // şeklin çevresini seç
    .toArray(); // sorguyu diziye dönüştür
} catch(e) {
    console.log(`olmadı 😢, hata: ${e}`);
}
