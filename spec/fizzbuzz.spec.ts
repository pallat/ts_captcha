/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../src/fizzbuzz.ts" />

describe("FizzBuzz", () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    })

    it("Say 1 should 1", () => {
        expect(fizzBuzz.say(1)).toEqual("1");
    });

    it("Say 2 should 2", () => {
        expect(fizzBuzz.say(2)).toEqual("2");
    });
    it("Say 3 should Fizz", () => {
        expect(fizzBuzz.say(3)).toEqual("Fizz");
    });
    it("Say 5 should Buzz", () => {
        expect(fizzBuzz.say(5)).toEqual("Buzz");
    });

    it("Say 6 should Fizz", () => {
        expect(fizzBuzz.say(6)).toEqual("Fizz");
    });

    it("Say 10 should Buzz", () => {
        expect(fizzBuzz.say(10)).toEqual("Buzz");
    });

    it("should say 'FizzBuzz' when put 15", () => {
        expect(fizzBuzz.say(15)).toEqual("FizzBuzz");
    });
});
