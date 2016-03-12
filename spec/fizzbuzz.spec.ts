/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../src/fizzbuzz.ts" />
describe("FizzBuzz", () => {
    it("Say 1 should 1", () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.say(1)).toEqual("1");
    });
});
