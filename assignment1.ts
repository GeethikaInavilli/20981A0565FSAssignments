let myNumber: number= 42;
let myString: string= "Hello";
let myBoolean: boolean= true;
let myArrayOfNumbers: number[]= [1, 2, 3, 4, 5];
let myTuple: [string, number] = ["Monday", 1];
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
let today: DaysOfWeek=DaysOfWeek.Tuesday;
console.log("Number:",myNumber);
console.log("String:",myString);
console.log("Boolean:",myBoolean);
console.log("Array of Numbers:",myArrayOfNumbers);
console.log("Tuple:",myTuple);
console.log("Enum (Day of the Week):",today);


//function - add two nums
function add(num1: number, num2: number): number {
    return num1 + num2;
}
let sum: number = add(5, 7);
console.log("Sum:", sum); 

//function - capitalize a string
function capitalize(s: string): string {
    if (s.length === 0) {
        return s; 
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const os: string = "typescript assignment";
const cs: string = capitalize(os);
console.log("Original String:", os);
console.log("Capitalized String:", cs);


// Define the interface Person
interface Person {
    name: string;
    age: number;
    email: string;
}
const user: Person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
};
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Email:", user.email);


//Car class
class Car {
    company: string;
    model: string;
    year: number;
    constructor(company: string, model: string, year: number) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    displayInfo(): void {
        console.log(`Car Information:
        Company: ${this.company}
        Model: ${this.model}
        Year: ${this.year}`);
    }
} 
let myCar = new Car("Toyota", "abc", 2022);
myCar.displayInfo();


//generic function - reverseArray
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}
let oarr: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", oarr);
let revarr: number[] = reverseArray(oarr);
console.log("Reversed Array:", revarr);

