class Capcha {

    constructor(public pattern:number, public left:number, public operator:number, public right:number) {}

    show() :string {
        let mapNumber = {
            1: "ONE",
            2: "TWO",
            3: "THREE",
            4: "FOUR",
            5: "FIVE",
            6: "SIX",
            7: "SEVEN",
            8: "EIGHT",
            9: "NINE"
        };

        let mapOperator = {
            1: "+",
            2: "-",
            3: "*",
            4: "/"
        };

        let mapPattern = {
            1: () => {
                return this.left.toString() + " " + mapOperator[this.operator] + " " + mapNumber[this.right];
            },
            2: () => {
                return mapNumber[this.left] + " " + mapOperator[this.operator] + " " + this.right.toString();
            }
        }

        return mapPattern[this.pattern]();
    }
}
