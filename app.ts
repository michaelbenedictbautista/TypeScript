const inputNum1 = document.querySelector("#input1") as HTMLInputElement;
const inputNum2 = document.querySelector("#input2") as HTMLInputElement;
const submitBtn1 = document.querySelector("#submitBtn");

const addNumbers = (num1 : number, num2 : number) => {
    return num1 + num2;
}


submitBtn1?.addEventListener("click", () => {
    console.log(`The sum is ${addNumbers(+inputNum1.value, parseInt(inputNum2.value))}`);
})