class Capcha {
    private leftOperand :Operand;
    private rightOperand :Operand;
    private operator : Operator;

    invertPattern(pattern:number) : number {
        if (pattern == 1) {
            return 2
        }
        return 1
    }

    constructor(public pattern:number,left:number,operator:number, right:number) {
        this.leftOperand = Operand.createOperand(pattern,left);
        this.rightOperand = Operand.createOperand(this.invertPattern(pattern),right);
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
    private mapNumber:string[] =  ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];

    constructor(public pattern:number, public operand:number){}

    static createOperand(pattern:number, operand:number) {
        return new Operand(pattern,operand);
    }

    toString() :string {


        if (this.pattern == 1) {
            return this.operand.toString();
        }
        return this.mapNumber[this.operand];
    }
}
