// const inputNum1 = document.querySelector("#input1") as HTMLInputElement;
// const inputNum2 = document.querySelector("#input2") as HTMLInputElement;
// const submitBtn1 = document.querySelector("#submitBtn");
// const addNumbers = (num1 : number, num2 : number) => {
//     return num1 + num2;
// }
// submitBtn1?.addEventListener("click", () => {
//     console.log(`The sum is ${addNumbers(+inputNum1.value, parseInt(inputNum2.value))}`);
// })
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 0] = "ADMIN";
    Access[Access["MODERATOR"] = 1] = "MODERATOR";
    Access[Access["USER"] = 2] = "USER";
})(Access || (Access = {}));
var student = {
    name: "John",
    age: 21,
    interest: ["Basketball", "Soccer"],
    // access: [1, "admin"]
    access: Access.ADMIN
};
if (student.access === Access.USER) {
    console.log("is admin");
}
else
    console.log("is moderator or user...");
// console.log(student.age)
