/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  return typeof input === "number" && input * 2;
}

function combineValues(input1: unknown, input2: unknown): string | number {
  if (typeof input1 === "string" && typeof input2 === "string")
    return input1 + input2;
  if (typeof input1 === "number" && typeof input2 === "number")
    return input1 + input2;
  throw new Error("Type Error");
}

function appendToArray(list: unknown, input: unknown): string[] {
  if (!Array.isArray(list)) throw new Error("list is not an array.");
  if (typeof input !== "string") throw new Error("input is not a string.");
  const stringList = list.map((item) => String(item));
  return list.concat(input);
}

function sumArray(list: unknown) {
  if (!Array.isArray(list)) throw new Error("list is not an array.");

  const filteredList: number[] = list.filter(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );

  return filteredList.reduce((accumulator: number, item: number) => {
    return accumulator + item;
  }, 0);
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  if ("name" in fruit) {
    console.log(fruit.name.toUpperCase());
  }
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit.color?.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat?.();
}
