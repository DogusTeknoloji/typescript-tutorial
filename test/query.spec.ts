import { expect } from "chai";
import "mocha";

import "../index";
import companies from "./fixture";

describe("Query should", () => {

    it("filter using where", () => {
        const filtered = companies.asQueryable().where((c) => c.id > 500).toArray();

        expect(filtered).to.have.length(4);
    });

    it("project using select", () => {
        const projected = companies.asQueryable().select((x) => ({ id: x.id })).toArray();

        projected.forEach((p) => {
            expect(p).to.have.property("id");
            expect(p).to.not.have.property("name");
        });
    });

    it("skip a slice", () => {
        const skipped = companies.asQueryable().skip(4).toArray();

        expect(skipped).to.have.length(6);
        expect(skipped).to.be.deep.equal(companies.slice(4));
    });

    it("take a slice", () => {
        const taken = companies.asQueryable().take(3).toArray();

        expect(taken).to.have.length(3);
        expect(taken).to.be.deep.equal(companies.slice(0, 3));
    });
});
