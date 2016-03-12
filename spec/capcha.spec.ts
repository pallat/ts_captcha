/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../src/capcha.ts" />
describe("Capcha", () => {
    describe("Test right operand", () => {
        it("should show 1 + ONE when put 1 1 1 1", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,1)).toEqual("1 + ONE");
        });

        it("should show 1 + TWO when put 1 1 1 2", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,2)).toEqual("1 + TWO");
        });

        it("should show 1 + THREE when put 1 1 1 3", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,3)).toEqual("1 + THREE");
        });

        it("should show 1 + FOUR when put 1 1 1 4", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,4)).toEqual("1 + FOUR");
        });

        it("should show 1 + FIVE when put 1 1 1 5", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,5)).toEqual("1 + FIVE");
        });

        it("should show 1 + SIX when put 1 1 1 6", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,6)).toEqual("1 + SIX");
        });

        it("should show 1 + SEVEN when put 1 1 1 7", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,7)).toEqual("1 + SEVEN");
        });

        it("should show 1 + EIGHT when put 1 1 1 8", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,8)).toEqual("1 + EIGHT");
        });

        it("should show 1 + NINE when put 1 1 1 9", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,1,1,9)).toEqual("1 + NINE");
        });
    });

    describe("Test left operand", () => {
        it("should show ONE + 1 when put 2 1 1 1", () => {
            var capcha = new Capcha();
            expect(capcha.show(2,1,1,1)).toEqual("ONE + 1");
        });

        it("should show TWO + 1 when put 2 2 1 1", () => {
            var capcha = new Capcha();
            expect(capcha.show(2,2,1,1)).toEqual("TWO + 1");
        });

        it("should show TWO + 3 when put 2 2 1 3", () => {
            var capcha = new Capcha();
            expect(capcha.show(2,2,1,3)).toEqual("TWO + 3");
        });
    });

    describe("Test operator", () => {
        it("should show 2 + NINE when put 1 2 1 9", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,2,1,9)).toEqual("2 + NINE");
        });

        it("should show 2 / NINE when put 1 2 4 9", () => {
            var capcha = new Capcha();
            expect(capcha.show(1,2,4,9)).toEqual("2 / NINE");
        });

        it("should show TWO - 3 when put 2 2 2 3", () => {
            var capcha = new Capcha();
            expect(capcha.show(2,2,2,3)).toEqual("TWO - 3");
        });

        it("should show TWO * 3 when put 2 2 3 3", () => {
            var capcha = new Capcha();
            expect(capcha.show(2,2,3,3)).toEqual("TWO * 3");
        });
    });
});
