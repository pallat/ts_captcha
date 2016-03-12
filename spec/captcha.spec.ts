/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../src/captcha.ts" />
describe("Capcha", () => {
    describe("Test right operand", () => {
        it("should show 1 + ONE when put 1 1 1 1", () => {
            var capcha = new Capcha(1,1,1,1);
            expect(capcha.show()).toEqual("1 + ONE");
        });

        it("should show 1 + TWO when put 1 1 1 2", () => {
            var capcha = new Capcha(1,1,1,2);
            expect(capcha.show()).toEqual("1 + TWO");
        });

        it("should show 1 + THREE when put 1 1 1 3", () => {
            var capcha = new Capcha(1,1,1,3);
            expect(capcha.show()).toEqual("1 + THREE");
        });

        it("should show 1 + FOUR when put 1 1 1 4", () => {
            var capcha = new Capcha(1,1,1,4);
            expect(capcha.show()).toEqual("1 + FOUR");
        });

        it("should show 1 + FIVE when put 1 1 1 5", () => {
            var capcha = new Capcha(1,1,1,5);
            expect(capcha.show()).toEqual("1 + FIVE");
        });

        it("should show 1 + SIX when put 1 1 1 6", () => {
            var capcha = new Capcha(1,1,1,6);
            expect(capcha.show()).toEqual("1 + SIX");
        });

        it("should show 1 + SEVEN when put 1 1 1 7", () => {
            var capcha = new Capcha(1,1,1,7);
            expect(capcha.show()).toEqual("1 + SEVEN");
        });

        it("should show 1 + EIGHT when put 1 1 1 8", () => {
            var capcha = new Capcha(1,1,1,8);
            expect(capcha.show()).toEqual("1 + EIGHT");
        });

        it("should show 1 + NINE when put 1 1 1 9", () => {
            var capcha = new Capcha(1,1,1,9);
            expect(capcha.show()).toEqual("1 + NINE");
        });
    });

    describe("Test left operand", () => {
        it("should show ONE + 1 when put 2 1 1 1", () => {
            var capcha = new Capcha(2,1,1,1);
            expect(capcha.show()).toEqual("ONE + 1");
        });

        it("should show TWO + 1 when put 2 2 1 1", () => {
            var capcha = new Capcha(2,2,1,1);
            expect(capcha.show()).toEqual("TWO + 1");
        });

        it("should show TWO + 3 when put 2 2 1 3", () => {
            var capcha = new Capcha(2,2,1,3);
            expect(capcha.show()).toEqual("TWO + 3");
        });
    });

    describe("Test operator", () => {
        it("should show 2 + NINE when put 1 2 1 9", () => {
            var capcha = new Capcha(1,2,1,9);
            expect(capcha.show()).toEqual("2 + NINE");
        });

        it("should show 2 / NINE when put 1 2 4 9", () => {
            var capcha = new Capcha(1,2,4,9);
            expect(capcha.show()).toEqual("2 / NINE");
        });

        it("should show TWO - 3 when put 2 2 2 3", () => {
            var capcha = new Capcha(2,2,2,3);
            expect(capcha.show()).toEqual("TWO - 3");
        });

        it("should show TWO * 3 when put 2 2 3 3", () => {
            var capcha = new Capcha(2,2,3,3);
            expect(capcha.show()).toEqual("TWO * 3");
        });
    });
});
