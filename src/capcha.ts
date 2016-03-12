class Capcha {

    constructor(public pattern:number, public left:number, public operator:number, public right:number) {}

    getOperator() :string {
        let mapOperator = {
            1: "+",
            2: "-",
            3: "*",
            4: "/"
        };
        return mapOperator[this.operator];
    }

    getStringNumber(num: number) :string {
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

        return mapNumber[num]
    }

    show() :string {

        let mapPattern = {
            1: () => {
                return this.left.toString() + " " + this.getOperator() + " " + this.getStringNumber(this.right);
            },
            2: () => {
                return this.getStringNumber(this.left) + " " + this.getOperator() + " " + this.right.toString();
            }
        }

        return mapPattern[this.pattern]();
    }
}
