/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../src/fizzbuzz.ts" />
describe("FizzBuzz", () => {
    it("Say 1 should 1", () => {
        let fizzBuzz:FizzBuzz = new FizzBuzz();
        expect(fizzBuzz.say(1)).toEqual("1");
    });
    it("Say 2 should 2", () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.say(2)).toEqual("2");
    });
    it("Say 3 should Fizz", () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.say(3)).toEqual("Fizz");
    });
});
