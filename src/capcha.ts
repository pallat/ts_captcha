class Capcha {
    constructor() {}
    show(pattern:number, left:number, operator:number, right:number) :string {
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
                return left.toString() + " " + mapOperator[operator] + " " + mapNumber[right];
            },
            2: () => {
                return mapNumber[left] + " " + mapOperator[operator] + " " + right.toString();
            }
        }

        return mapPattern[pattern]();
    }
}
