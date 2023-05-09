var inputNum1 = document.querySelector("#input1");
var inputNum2 = document.querySelector("#input2");
var submitBtn1 = document.querySelector("#submitBtn");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
submitBtn1 === null || submitBtn1 === void 0 ? void 0 : submitBtn1.addEventListener("click", function () {
    console.log("The sum is ".concat(addNumbers(+inputNum1.value, parseInt(inputNum2.value))));
});
