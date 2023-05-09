// const inputNum1 = document.querySelector("#input1") as HTMLInputElement;
// const inputNum2 = document.querySelector("#input2") as HTMLInputElement;
// const submitBtn1 = document.querySelector("#submitBtn");

// const addNumbers = (num1 : number, num2 : number) => {
//     return num1 + num2;
// }

// submitBtn1?.addEventListener("click", () => {
//     console.log(`The sum is ${addNumbers(+inputNum1.value, parseInt(inputNum2.value))}`);
// })
enum Access {ADMIN, MODERATOR, USER}

const student: {
    name: string;
    age: number;
    gender?: string;//If null values
    // interest: any[]; //array of mix data types
    interest: string[]; //Array of string
    // access: any[]; 
    // access: [number, string];
    access: Access;
    

} = {
    name: "John",
    age: 21,
    interest: ["Basketball", "Soccer"],
    // access: [1, "admin"]
    access: Access.ADMIN
}

if (student.access === Access.USER) {
console.log("is admin");
} else console.log("is moderator or user...");
// console.log(student.age)