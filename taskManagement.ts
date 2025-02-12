// Enum and Union Types
enum TaskStatus {
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
}

// Union type: Can be either string or number
let taskId: string | number;
taskId = 101; // valid
taskId = "T101"; // also valid

// Utility Types
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  description?: string; // Optional property
}

// Partial utility type allows modifying properties
let editableTask: Partial<Task> = {
  title: "Learn TypeScript",
};
editableTask.status = TaskStatus.Pending;

// Readonly utility type prevents modifications
const readonlyTask: Readonly<Task> = {
  id: 1,
  title: "Complete Assignment",
  status: TaskStatus.InProgress,
};
// readonlyTask.status = TaskStatus.Completed; // Error: Cannot assign to 'status' because it is a read-only property.

// Modules (Calculator.ts)
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

// Modules (App.ts)
import { add, subtract, multiply, divide } from "./Calculator";
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(6, 7));
console.log("Division:", divide(20, 5));

// Error Handling
function validateInput(input: string): void {
  if (!/^[a-zA-Z]+$/.test(input)) {
    throw new Error("Invalid input: Only alphabets are allowed.");
  }
}

try {
  validateInput("Hello123"); // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}
