 

// 1. Enum and Union Types
enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

// Union type: A variable can be either a string or a number
 
let taskIdentifier: string | number;

// 2. Utility Types
 
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Partial: For creating or updating tasks with optional properties
let newTask: Partial<Task> = {
  title: "Learn TypeScript",
};

// Readonly: Immutable task
const completedTask: Readonly<Task> = {
  id: 1,
  title: "Complete Assignment",
  status: TaskStatus.Completed,
};

// Demonstrating changes
newTask.status = TaskStatus.Pending;  
// completedTask.status = TaskStatus.Pending;  
// 3. Modules: Calculator.ts (exported) and App.ts (imported)

// Calculator Module
export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// Using the Calculator module
import { add, subtract, multiply, divide } from "./Calculator";

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 2)); // 5

// 4. Error Handling
function validateInput(input: string): void {
  const regex = /^[A-Za-z]+$/;
  if (!regex.test(input)) {
    throw new Error("Invalid input: Only alphabets are allowed.");
  }
}

try {
  validateInput("Mona123");
} catch (error) {
  console.error("Error:", error.message);
}

// Part 2: Complex Tasks

// 1. Generic Functions and Interfaces
function transformArray<T, U>(arr: T[], transformFn: (item: T) => U): U[] {
  return arr.map(transformFn);
}

const numbers = [1, 2, 3];
const stringifiedNumbers = transformArray(numbers, (num) => num.toString());
console.log(stringifiedNumbers); // ["1", "2", "3"]

// Generic interface for a configuration object
interface ConfigObject {
  [key: string]: string | number | boolean;
}

const appConfig: ConfigObject = {
  darkMode: true,
  version: 1.0,
  appName: "Task Manager",
};

// 2. Advanced Concepts
// any vs unknown vs never
function processValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("It's a string:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("It's a number:", value * 2);
  } else {
    console.log("Unknown type");
  }
}

// Using type assertions
const unknownValue: unknown = "Hello TypeScript";
const stringValue: string = unknownValue as string;
console.log(stringValue.toUpperCase());

// 3. Mini Application: Task Management System

// Interfaces for Task and User
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  priority: "Low" | "Medium" | "High";
}

interface User {
  id: number;
  name: string;
}

// Generic class to manage tasks
class TaskManager<T extends Task> {
  private tasks: T[] = [];

  addTask(task: T): void {
    this.tasks.push(task);
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  filterTasksByStatus(status: TaskStatus): T[] {
    return this.tasks.filter((task) => task.status === status);
  }
}

const manager = new TaskManager<Task>();
manager.addTask({ id: 1, title: "Complete Homework", status: TaskStatus.Pending, priority: "High" });
manager.addTask({ id: 2, title: "Review PRs", status: TaskStatus.InProgress, priority: "Medium" });

console.log(manager.filterTasksByStatus(TaskStatus.Pending));

// 4. Type Guards
interface Student {
  name: string;
  grade: string;
  subjects: string[];
}

interface Teacher {
  name: string;
  department: string;
  courses: string[];
}

function isStudent(person: Student | Teacher): person is Student {
  return (person as Student).grade !== undefined;
}

function printDetails(person: Student | Teacher): void {
  if (isStudent(person)) {
    console.log(`Student: ${person.name}, Grade: ${person.grade}, Subjects: ${person.subjects.join(", ")}`);
  } else {
    console.log(`Teacher: ${person.name}, Department: ${person.department}, Courses: ${person.courses.join(", ")}`);
  }
}

const student: Student = { name: "Mona", grade: "A", subjects: ["Math", "CS"] };
const teacher: Teacher = { name: "Mr. Smith", department: "Physics", courses: ["Mechanics", "Optics"] };

printDetails(student);
printDetails(teacher);
