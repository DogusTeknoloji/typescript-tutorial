import { ArrayQuery } from "./ArrayQuery";
import { IQuery } from "./IQuery";

declare global {

    // tslint:disable-next-line:interface-name
    interface Array<T> {
        asQueryable(): IQuery<T>;
    }
}

Array.prototype.asQueryable = function() {
    return new ArrayQuery(this);
};
