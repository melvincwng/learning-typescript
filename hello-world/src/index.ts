// LESSON 1 (SETUP)
// Remember TS code need to be compiled to JS code first, before the browser can understand
// Run tsc index.ts to do the compilation
// console.log("Hello World");
// let age: number = 20;
// // age = 'a' (invalid code --> age is a number, cannot assign string to it)
// if (age < 50) age += 10;
// console.log(age);

// LESSON 2 (TYPES)
// let sales: number = 123_456_789; // large numbers can be separated by _ in TS to make it more readable
// let course: string = "Typescript";
// let is_published: boolean = true;
// let level; // hover over 'level' variable, notice that level's type is 'any' --> cause we never initialize it

// LESSON 3 (ARRAYS)
// Take note the TS compiler can infer the type of the variable based on how we declare it
// let string = ["a", "b", "c"]; // works as well, hover over 'string'
// let numbers: number[] = [1, 2, 3];

// LESSON 4 (TUPLES)
// In typescript, Tuples are essentially array-like structures containing two values of different data types
// let tuple: [number, string] = [1, "test"];

// LESSON 5 (ENUMS)
// Enums are just data structures of fixed length containing fixed values
// Add a const keyword in front of enum keyword to generate more optimized code in JS
// const enum Size {
//   Small = 1,
//   Medium = 2,
//   Large = 3,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize); // returns 2

// LESSON 6 (FUNCTIONS)
// Can return 'void' data type as well
// taxYear has a default value
// function calculateTax(income: number, taxYear: number = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }
// calculateTax(15_000, 2022);

// LESSON 7 (OBJECTS)
// arguments can be optional as well using the '?' syntax
// readonly means the value of id cannot be edited (read only)
// let employee: {
//   readonly id: number;
//   name: string;
//   faxNumber?: number;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Jon",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// LESSON 8 (ADVANCED TYPES - TYPE ALIAS)
// Type aliases --> use 'type' keyword
// type Employee = {
//   readonly id: number;
//   name: string;
//   faxNumber?: number;
//   retire: (date: Date) => void;
// };
// let employee: Employee = {
//   id: 1,
//   name: "Jon",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// LESSON 9 (UNION TYPES ---> use | )
// Type narrowing means using 'typeof' --> can narrow down the type
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }
// kgToLbs(10);
// kgToLbs("10kg");

// LESSON 10 (INTERSECTION TYPES ---> use & )
// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// LESSON 11 (LITERAL TYPES)
// let quantity: number; // This means quantity can be ANY number
// let literalQuantity: 50; // This means LITERALLY we want quantity to be only 50 (Literal type = Exact type)
// // another e.g.
// type Metric = "cm" | "inch";
// let size: Metric = "cm";

// LESSON 12 (NULLABLE TYPES)
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola!");
// }
// greet(null);

// LESSON 13 (OPTIONAL CHAINING)
// Optional Chaining using the ? operator. If truthy, then we can find the property/key. Else if null/undefined, nothing will happen
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator (imagine customers is an array of customers OR could be null/undefined)
// customers?.[0]

// Optional call
// let log:any = (message: string) => console.log(message)
let log: any = null;
log?.("a"); // log will only be called if it's referencing to a function. If null/undefined, the ?. will prevent crash
