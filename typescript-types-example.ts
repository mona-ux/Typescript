//   Basic Data Types
let name: string = "Mona";
let age: number = 30;
let isEmployed: boolean = true;
let hobbies: string[] = ["Singing", "Books", "Traveling"];
let personInfo: [string, number] = ["Mona", 30];  // Tuple

//   Interface for Person
interface Person {
    name: string;
    age: number;
    address?: string;
}

const person: Person = {
    name: "Mona",
    age: 20
};

const personWithAddress: Person = {
    name: "Sana",
    age: 28,
    address: "123 Main St"
};

// 3. Function with Parameter Type Annotations and Return Type
function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

console.log(greet(person));  // Output: "Hello, Mona! You are 30 years old."

//  Type Inference
let inferredName = "Mona";  //  infers this as string
let inferredAge = 25;        //  infers this as number

// Union Types
let id: string | number;
id = 123;  // OK
id = "abc";  // OK

// Intersection Types
interface Employee {
    id: number;
    name: string;
}

interface Manager {
    department: string;
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
    id: 1,
    name: "Sana",
    department: "HR"
};

//  `any` and `unknown` Types
let value: any = "Money";
value = 42;  // No error

let unknownValue: unknown = "Money";
// an error:
// console.log(unknownValue.toUpperCase()); 

// To fix it:
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
