// Working with Advanced Types

// Enum Usage
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const printDay = (day: DaysOfWeek): void => {
    console.log(`Today is: ${DaysOfWeek[day]}`);
};

printDay(DaysOfWeek.Monday);

// Union Types
type StudentId = string | number;

const displayStudentId = (id: StudentId): void => {
    console.log(`Student ID: ${id}`);
};

displayStudentId(12345);
displayStudentId("M123");

// Intersection Types
interface PersonalDetails {
    name: string;
    age: number;
}

interface AcademicDetails {
    course: string;
    year: number;
}

type Student = PersonalDetails & AcademicDetails;

const student: Student = {
    name: "Mona",
    age: 21,
    course: "Computer Science",
    year: 3,
};

console.log(student);

// Generic Functions and Interfaces

// Generic Function to Filter Array
function filterArray<T>(arr: T[], filterFn: (item: T) => boolean): T[] {
    return arr.filter(filterFn);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

// Generic Interface for KeyValuePair
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

const pair: KeyValuePair<string, number> = { key: "Age", value: 21 };
console.log(pair);

// Utility Types

// Partial
interface UserProfile {
    name: string;
    email: string;
    age: number;
}

const partialProfile: Partial<UserProfile> = {
    name: "Mona",
};

// Readonly
const readonlyProfile: Readonly<UserProfile> = {
    name: "Mona",
    email: "mona@example.com",
    age: 22,
};
// readonlyProfile.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property

// Record
const grades: Record<string, number> = {
    Math: 95,
    Science: 90,
};
console.log(grades);

// Modules
// Person.ts
export interface Person {
    name: string;
    age: number;
}

export const createPerson = (name: string, age: number): Person => ({ name, age });

// Main.ts
import { Person, createPerson } from "./Person";

const newPerson: Person = createPerson("Mona", 24);
console.log(newPerson);

// Exploring TypeScript Features

// Type Assertions
const someValue: unknown = "This is a string";

// Using 'as'
const stringLength1: number = (someValue as string).length;

// Using angle bracket syntax
const stringLength2: number = (<string>someValue).length;

console.log(stringLength1, stringLength2);

// Difference between 'any' and 'unknown'
// 'any' lets bypass all type checks
let anyVar: any = "Hello";
anyVar = 123; // No error

// 'unknown' requires a type guard before using it
let unknownVar: unknown = "Hello";
// console.log(unknownVar.toUpperCase()); // Error: Object is of type 'unknown'
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}

// Error Handling
function validateInput(input: unknown): string {
    if (typeof input === "string") {
        return input;
    } else {
        throw new Error("Invalid input: Expected a string");
    }
}

try {
    const result = validateInput("Valid Input");
    console.log(result);
} catch (error) {
    console.error(error);
}
