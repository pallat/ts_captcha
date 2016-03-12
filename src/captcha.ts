class Capcha {
    private leftOperand :Operand;
    private rightOperand :Operand;
    private operator : Operator;
    private rightPattern = {
        1:2,
        2:1
    }

    constructor(public pattern:number,left:number,operator:number, right:number) {
        this.leftOperand = Operand.createOperand(pattern,left);
        this.rightOperand = Operand.createOperand(this.rightPattern[pattern],right);
        this.operator = Operator.createOperator(operator);
    }

    show() :string {
        return this.leftOperand.toString() + " " + this.operator.toString() + " " + this.rightOperand.toString();
    }
}

class Operator {
    private operators: string[] = ["","+","-","*","/"];
    constructor(public operator:number) {}
    static createOperator(operator:number) {
        return new Operator(operator);
    }

    toString() :string {
        return this.operators[this.operator];
    }
}

class Operand {
    private strNumber:string[] =  ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
    private whichNumberPattern = {
        1: () => {
            return this.operand.toString();
        },
        2: () => {
            return this.strNumber[this.operand];
        }
    }

    constructor(public pattern:number, public operand:number){}

    static createOperand(pattern:number, operand:number) {
        return new Operand(pattern,operand);
    }

    toString() :string {
        return this.whichNumberPattern[this.pattern]();
    }
}
