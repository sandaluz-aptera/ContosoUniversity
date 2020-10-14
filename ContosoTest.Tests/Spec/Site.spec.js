// import thing from "../../ContosoUniversity/wwwroot/js/site";
const { callTheThing } = require("../../ContosoUniversity/wwwroot/js/site");

describe("My first jasmine tested function", ()=> {
    it("exists", ()=> {
        expect(callTheThing()).toEqual(null);
    });

    describe("given 1", ()=> {
        it("returns a", ()=> {
            expect(callTheThing(1)).toEqual("a");
        });

        it("does not return null", ()=> {
            expect(callTheThing(1)).not.toEqual(null);
        });
    });
});