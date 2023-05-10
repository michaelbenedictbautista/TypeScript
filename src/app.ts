// const inputNum1 = document.querySelector("#input1") as HTMLInputElement;
// const inputNum2 = document.querySelector("#input2") as HTMLInputElement;
// const submitBtn1 = document.querySelector("#submitBtn");

// const addNumbers = (num1 : number, num2 : number) => {
//     return num1 + num2;
// }

// submitBtn1?.addEventListener("click", () => {
//     console.log(`The sum is ${addNumbers(+inputNum1.value, parseInt(inputNum2.value))}`);
// })


////////////////////// Primitive and structured data types //////////////////
// enum Access {ADMIN, MODERATOR, USER}

// const student: {
//     name: string;
//     age: number;
//     gender?: string;//If null values
//     // interest: any[]; //array of mix data types
//     interest: string[]; //Array of string
//     // access: any[]; 
//     // access: [number, string];
//     access: Access;
    

// } = {
//     name: "John",
//     age: 21,
//     interest: ["Basketball", "Soccer"],
//     // access: [1, "admin"]
//     access: Access.ADMIN
// }

// if (student.access === Access.ADMIN) {
// console.log("is admin");
// } else console.log("is moderator or user...");
// // console.log(student.age)


////////////////////// Union Types //////////////////

// // Native function implementation
// const addOrCombine = (data1: number | string, data2: number | string ) => {
//     let result: number | string;
//     if (typeof data1 === 'number' && typeof data2 === 'number') {
//         result = data1 + data2;
//     } else {
//         result = data1.toString() + " " + data2.toString();
//     }
//     return result;
// }

// // Using type class
// type MyData  = number | string;

// const addOrCombine = (data1:MyData , data2:MyData  ) => {
//     let result: number | string;
//     if (typeof data1 === 'number' && typeof data2 === 'number') {
//         result = data1 + data2;
//     } else {
//         result = data1.toString() + " " + data2.toString();
//     }
//     return result;
// }

// const combinedNumbers = addOrCombine(3,4);
// console.log(combinedNumbers);

// const combinedStrings =  addOrCombine('Hello', 'World!!!');
// console.log(combinedStrings);


////////////////////// Function //////////////////
// const sum = (num1: number, num2: number) => {
//     return num1 + num2;
// };

// // Convert result to string
// const getResult = (num: number ): string => {
//    let resultString = `Result: ${num}`;
//    return resultString;
// };

// // Declaring the return value or callback function(number or string after the arrow function)
// let sumFunction: (num1: number, num2: number) => number;
// let getResultFunction: (num: number) => string;

// sumFunction = sum;
// getResultFunction = getResult;

// console.log(sumFunction(5, 8));//13
// console.log(getResultFunction(5)); //5

////////////////////// Unknown and never //////////////////
// let userData: unknown;
// let trueData: string;

// userData = 'now'
// userData = 5

// if(typeof userData === "string") {
//     trueData = userData;
// }

// // "Never" callback function will stop the execution of the next code below.
// const generateErrorCode = (description:string, errorCode: number): never => {
//     throw {message: description, code : errorCode}
// }

// // This will not be executed 
// const infiniteLoop = ():never => {
//     while(true){};
// }

// let day: string;
// day = 'Tuesday';

// if (day === "Tuesday") {
//     generateErrorCode("It's Tuesday...", 2);
// } else if(day === "Wednesday") {
//     generateErrorCode("It's Wednesday...", 3);
// }

// generateErrorCode("Error", 501);
// infiniteLoop();// this will now be executed.

////////////////////// Classes //////////////////

// //1. Using interface of structure of the class
// interface ModelType {
//     type: string;
//     color: string;
//     carFunction: () => void; // function that will return a void
// }

// class Vehicle {

//     modelType : ModelType

//     constructor(modelType: ModelType) {
//         this.modelType = modelType;
//     }
// }

// let modelType = {
//     type: "Car",
//     color: "Black",
//     carFunction: () => {
//         console.log("This is function!!!");
//     },
// }

// const vehicle =  new Vehicle(modelType);
// console.log(vehicle);


// 2.Basic class 
class Vehicle {
    type: string;
    color: string;

    constructor(t: string, c: string) {
        this.type = t;
        this.color = c;
    }
}

//Instantiate an object of the class Vehicle
const vehicle =  new Vehicle("Car", "Red");
console.log(vehicle);


