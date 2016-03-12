var Capcha = (function () {
    function Capcha() {
    }
    Capcha.prototype.show = function (pattern, left, operator, right) {
        var mapNumber = {
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
        var mapOperator = {
            1: "+",
            2: "-",
            3: "*",
            4: "/"
        };
        var mapPattern = {
            1: function () {
                return left.toString() + " " + mapOperator[operator] + " " + mapNumber[right];
            },
            2: function () {
                return mapNumber[left] + " " + mapOperator[operator] + " " + right.toString();
            }
        };
        return mapPattern[pattern]();
    };
    return Capcha;
}());
