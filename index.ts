import Animal from "./lib/Animal";
import * as functions from "./lib/functions";

console.log(`çift sayı sayısı: ${functions.countEven(1, 2, 3, 4, 5, 6)}`);

console.log(`28 + 14 = ${functions.dynamicFunc(28, 14)}`);

console.log(`numberify of 42: ${functions.numberify(42)}, "Prefect": ${functions.numberify("Prefect")}`);

// emoji değişkenler :)
const ಠ_ಠ = new Animal("Düldül");
console.log(`stringify of düldül: ${functions.stringify(ಠ_ಠ, 12)}`);

console.log(functions.default("hata oldu", 0, "sıkıntı var"));
